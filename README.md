# Static website generator with React
Gulp starter that can create a static webpage where each sub page can contain React components
Typical use-case might be, a utility site where each sub page contain a small independent React application.

## Create a new utility page
1. Create a new folder in app. Folder name can be anything.
2. Add a `data.json` file. Used by Nunjucks template engine.
3. Add custom style by add a `style.scss` file
4. Create a html template file in folder. Must extend *layout.nunjucks*. Place content in body block.
5. Create an `entry.js` file in folder. Gulp will use this file to bundle scripts.
