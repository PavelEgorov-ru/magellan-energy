# "Magellan Energy"

Проект создан `create-next-app@latest`

Разработка каждом этапе велась в отдельной ветке, с последующим сливанием с веткой `dev`. Перед деплоем проект размещается в контейнере Docker. Публикуется в DockerHub. Оттуда образ устанавливается на удаленный сервер и разворачивается.

В настоящий момент весь контент находится внутри проекта. Удаленный сервер отключен.

Если кто-то захочет взять его за основу своего проекта, установите зависимости с помощью команды `npm ci`. Во время разработки использовалась Node версии 16

Развернуть приложение локально в режиме разраболтки `npm run dev`

## Текущий стек

Next.js, TypeScript, Docker, EsLint, Prettier, CSS module, библиотека Classnames

## Текущая функциональность

Работает базовая навигация. Верстка пока не адаптивная, стили базовые. Больше работа велась над функциональностью, а не над внешним видом

## Дальнейшие развитие.

1. Приготовить контент в Strapi. Использовать его оттуда, продумать логику формирования контента;
2. Валидация формы отправки;
3. Адаптивная верстка;
4. Универсальные мини-компонеты:

- заголовки, параграфы и другие основные Html-теги;
- типизировать их, внутри не применяя никаких стилей, чтоб они не перекрывали внешние стили из пропсов;
  Это больше учебная задача, хочется применить типизацию компонентов, но не использовать подход CSS-in-Js, а CSS module и классические стили. Задачи применения стилей в разных ситуациях переложить на бибилотеку Classnames.
