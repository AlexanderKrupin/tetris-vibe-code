Краткая инструкция деплоя на GitHub Pages

1. Убедитесь, что в `package.json` есть поле `repository` и скрипты `predeploy`/`deploy`:

   - `npm run build` создаст папку `dist`
   - `npm run deploy` опубликует содержимое `dist` в gh-pages ветку

2. Установите зависимость `gh-pages` локально:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Запушьте изменения в `main` (или другую ветку, указанную в workflow). GitHub Actions автоматически выполнит сборку и деплой.

4. Проверьте страницу: `https://AlexanderKrupin.github.io/tetris-vibe-code/`

Если нужно — могу добавить автоматическое заполнение `repository` и `homepage` в `package.json` или изменить workflow на другую ветку.


