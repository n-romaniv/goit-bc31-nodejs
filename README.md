# Bootcamp 31. Node.js

## Заняття № 1: Основи Node.js

### JavaScript код у браузері vs Node.js

![Chrome vs Node.js Components](./lesson_1/images/chrome_vs_node_components.svg)

![Runtime vs Language](./lesson_1/images/runtime_vs_language.svg)

![V8 pipeline](./lesson_1/images/v8_pipeline.svg)

### Створення проєкту

1. У терміналі запустити `npm init -y`. У поточній папці буде створено package.json і package-lock.json.
2. Додати файл .gitignore такого змісту:
   ```
   node_modules
   .vscode
   .idea
   ```
3. (Необовʼязково) Встановити prettier за допомогою `npm install -D prettier`.
4. (Необовʼязково) Створити файл .editorconfig (використати зразок з цього репозиторію).
