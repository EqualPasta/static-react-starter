# Static website generator with React
Gulp starter that can create a static webpage where each sub page can contain React components.
A typical use-case might be a utility site where each sub page contains a small independent React application.

The starter project consists of:
* Pure html front page with links to each react page.
* Two pages that contains a React component.
  * A counter component (click on number to increment)
  * A component simply outputting a value from data.json file.

## Getting started
1. clone repo
2. `npm install`



To start site locally on your machine:
```
gulp watch
```
## How to create a new page
The project is set up to give you a lot of customization at each page of the site.
1. Create a new folder in app. Folder name can be anything.
2. Add a `data.json` file. Used by Nunjucks template engine.
3. Add custom style by add a `style.scss` file
4. Create a html template file in folder. Must extend *layout.nunjucks*. Place content in body block.
5. Create an `entry.js` file in folder. Gulp will use this file to bundle scripts.
