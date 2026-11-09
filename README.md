# Лекции по Python

Статический сайт интерактивных лекций: обзор курса в стиле Compass, страницы лекций с запуском Python в браузере (Pyodide 0.27.6, лежит в `vendor/pyodide`), мини-тестами, автопроверкой задач и прогрессом в `localStorage`. Сборка не нужна.

## Публикация на GitHub Pages

1. Загрузите содержимое папки в корень репозитория.
2. Settings → Pages → Source: Deploy from a branch, ветка `main`, папка `/ (root)`.

Локально на Windows: двойной щелчок по `Запустить сайт.bat` (откроется браузер). Вручную: `python -m http.server` в папке сайта, затем http://localhost:8000. Открытие файлов двойным щелчком (`file://`) не подходит: браузер не запустит Python из локального файла.

## Как добавить лекцию

1. Скопируйте `lecture-01.html` в `lecture-02.html`, поменяйте `<title>`, `data-lecture="02"`, заголовок и разделы.
2. В `assets/course.js` у лекции 02 укажите `file: "lecture-02.html"` и удалите `soon: true`.

## Разметка интерактивных блоков

```html
<!-- Редактор кода -->
<div class="runner" data-file="hello.py"><textarea>
print("Привет")
</textarea></div>

<!-- Задача с автопроверкой: вывод сравнивается с data-expect (\n — перевод строки) -->
<div class="runner" data-id="gc-content" data-file="task.py" data-expect="0.6"><textarea>...</textarea></div>

<!-- Редактор с полем ввода для input() -->
<div class="runner" data-stdin="12\n18"><textarea>...</textarea></div>

<!-- Мини-тест -->
<div class="quiz" data-id="str-plus">
  <p class="quiz-q">Вопрос</p>
  <ul><li>Неверно</li><li data-correct>Верно</li></ul>
  <p class="quiz-why">Разбор ответа</p>
</div>

<!-- Пример, который нарочно завершается ошибкой -->
<div class="runner" data-file="runtime.py" data-error><textarea>print("126" / 3)</textarea></div>

<!-- Слайды лекции (HTML-показ из lecture-pptx) из папки slides/ -->
<div class="slides" data-src="slides/lecture-01.html"></div>

<!-- Блок «Подробнее»: детали, без которых раздел понятен -->
<div class="more">...</div>

<!-- Код с подсветкой без запуска -->
<pre class="code">print("пример")</pre>
```

У мини-тестов и задач `data-id` обязателен: по нему хранится прогресс студентов, поэтому опубликованный id не меняют.

Разделы лекции — это `<section id="...">` с заголовком `<h2>`: из них строятся нумерация и оглавление справа.

## Презентации лекций

`slides/lecture-NN.html` — презентация лекции одним файлом: слайды картинками, анимации по щелчку идут шагами с той же длительностью, что в PowerPoint (проявление, исчезновение, смена заливки); переходов между слайдами в исходных .pptx нет, поэтому слайды сменяются сразу. Заметок докладчика нет. Собрано `html_deck.py` из lecture-pptx с ключами `--no-notes --effect none`. На странице лекции блок `<div class="slides" data-src="slides/lecture-NN.html" data-title="Презентация лекции N">` стоит после целей лекции; кнопка «Во весь экран» или клавиша F — полный экран, O — обзор слайдов.

После правок в .pptx презентацию нужно пересобрать.
