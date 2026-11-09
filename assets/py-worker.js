/* Выполняет код Python (CPython в WebAssembly, Pyodide) в отдельном потоке,
   чтобы бесконечный цикл не подвешивал страницу. */
var BASE = new URL("../vendor/pyodide/", self.location.href).href;
importScripts(BASE + "pyodide.js");

// stdlib переименован (на самом деле zip-архив): хостинг artifacts не отдает файлы .zip
var ready = loadPyodide({ indexURL: BASE, stdLibURL: BASE + "python_stdlib.zip.wasm" }).then(function (py) {
  self.postMessage({ type: "ready", version: py.runPython("import sys; sys.version.split()[0]") });
  return py;
}, function (err) {
  self.postMessage({ type: "fail", text: String(err) });
});

function cleanTraceback(msg) {
  // Убираем служебные кадры Pyodide, оставляем то, что относится к коду студента.
  var at = msg.indexOf('File "<exec>"');
  if (at > 0) msg = "Traceback (most recent call last):\n  " + msg.slice(at);
  return msg.replace(/File "<exec>"/g, 'File "main.py"').trim();
}

self.onmessage = async function (e) {
  var job = e.data;
  var py = await ready;
  if (!py) return;
  var dec = new TextDecoder();
  function sink(kind) {
    return { write: function (buf) { self.postMessage({ type: kind, id: job.id, text: dec.decode(buf) }); return buf.length; } };
  }
  var lines = (job.stdin || "").split("\n");
  if (lines[lines.length - 1] === "") lines.pop();
  py.setStdout(sink("out"));
  py.setStderr(sink("err"));
  py.setStdin({ stdin: function () { return lines.length ? lines.shift() : undefined; } });
  var scope = py.globals.get("dict")();
  try {
    await py.runPythonAsync(job.code, { globals: scope, filename: "<exec>" });
    self.postMessage({ type: "done", id: job.id, ok: true });
  } catch (err) {
    self.postMessage({ type: "done", id: job.id, ok: false, text: cleanTraceback(String(err.message || err)) });
  } finally {
    scope.destroy();
  }
};
