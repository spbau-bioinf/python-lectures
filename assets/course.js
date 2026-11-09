/* Структура курса: модули и лекции. Этот файл правит скрипт new_lecture.py и читает check_site.py,
   поэтому между фигурными скобками только JSON (ключи в двойных кавычках, без комментариев).
   short — короткое имя курса для навигации; название и подзаголовок на обложке правятся в index.html.
   Лекция без file и с "soon": true показывается в программе с меткой «Скоро».
   practice (необязательно) - ссылка на практику к лекции: {"title": "...", "url": "https://..."}.
   copyright (необязательно) - первая строка подвала на всех страницах; за ней app.js пишет условия лицензии CC BY-NC 4.0. */
window.COURSE = {
  "short": "Python",
  "copyright": "© 2026 Ерофеев А.И. Курс читается в Академическом университете им. Ж. И. Алферова",
  "modules": [
    {
      "title": "Основы языка",
      "intro": "Как Python выполняет программу, какие данные хранит, как работать с текстом и принимать решения.",
      "lectures": [
        {
          "id": "01",
          "file": "lecture-01.html",
          "title": "Введение в Python",
          "summary": "Интерпретатор, среда разработки, ссылки, типы и float, ввод и вывод, FASTA и GC-состав.",
          "minutes": 60,
          "practice": {
            "title": "Практика 1. Введение в Python",
            "url": "https://spbau-bioinf.github.io/python-practice/practice_1/t1_00.html"
          }
        },
        {
          "id": "02",
          "file": "lecture-02.html",
          "title": "Строки и текстовые данные",
          "summary": "Индексы и срезы, неизменяемость, методы строк, split и join, форматы f-строк, Unicode.",
          "minutes": 55,
          "practice": {
            "title": "Практика 2. Строки и текстовые данные",
            "url": "https://spbau-bioinf.github.io/python-practice/practice_2/t2_00.html"
          }
        },
        {
          "id": "03",
          "title": "Логика и ветвления",
          "summary": "bool, сравнения, and, or, not, if/elif/else, вложенные условия.",
          "minutes": 65,
          "practice": {
            "title": "Практика 3. Логика и ветвления",
            "url": "https://spbau-bioinf.github.io/python-practice/practice_3/t3_00.html"
          },
          "file": "lecture-03.html"
        }
      ]
    },
    {
      "title": "Повторение и коллекции",
      "intro": "Циклы, списки, словари и множества: все, что нужно для обработки последовательностей целиком.",
      "lectures": [
        {
          "id": "04",
          "title": "Циклы и итеративная обработка данных",
          "summary": "for, while, range, in, накопление результата, счетчики, k-меры.",
          "minutes": 105,
          "practice": {
            "title": "Практика 4. Циклы",
            "url": "https://spbau-bioinf.github.io/python-practice/practice_4/t4_00.html"
          },
          "file": "lecture-04.html"
        },
        {
          "id": "05",
          "title": "Списки и кортежи",
          "summary": "Индексация и срезы, методы списков, обход, изменяемость, кортежи.",
          "minutes": 95,
          "practice": {
            "title": "Практика 5. Списки и кортежи",
            "url": "https://spbau-bioinf.github.io/python-practice/practice_5/t5_00.html"
          },
          "file": "lecture-05.html"
        },
        {
          "id": "06",
          "title": "Словари и множества",
          "summary": "Ключ и значение, get, items, keys, values, операции над множествами.",
          "minutes": 40,
          "soon": true
        }
      ]
    },
    {
      "title": "От фрагментов к программе",
      "intro": "Функции, регулярные выражения и файлы: сквозной проект, мини-анализатор FASTA.",
      "lectures": [
        {
          "id": "07",
          "title": "Функции и декомпозиция программы",
          "summary": "Параметры, return, локальные переменные, docstring, разбиение на функции.",
          "minutes": 45,
          "soon": true
        },
        {
          "id": "08",
          "title": "Регулярные выражения",
          "summary": "Шаблоны, классы символов, квантификаторы, группы, search, findall, sub.",
          "minutes": 40,
          "soon": true
        },
        {
          "id": "09",
          "title": "Файлы, исключения и сквозной проект",
          "summary": "open и with, чтение и запись, try/except, мини-анализатор FASTA.",
          "minutes": 45,
          "soon": true
        }
      ]
    }
  ]
};
