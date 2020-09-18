# Vue example application using Corporate-Ui and Scania-theme

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-vue/).

Clone this repo, install all dependencies and start it:
```bash
git clone https://github.com/scania/corporate-ui-vue.git
cd corporate-ui-vue
npm i
npm start
```

## Scania Digital Design System

Visit our Design System at [Digital.design.scania.com](https://digitaldesign.scania.com/) for more information

For more information about how to use Corporate-Ui and Scania-Theme go to [digitaldesign.scania.com/getting-started](https://digitaldesign.scania.com/getting-started/development)

## Project setup
This project uses **Corporate Ui** together with **Scania theme** as well as **vue-router**

## Technical notes
To use **Corporate Ui** do the following:
```javascript
import { defineCustomElements, addTheme } from 'corporate-ui'
defineCustomElements()
```
To use **Scania theme** do the following:
```javascript
import { theme as scania } from 'scania-theme'
addTheme(scania)
```
Add a ignore rule for **Corporate Ui** custom elements and use of Vue router:
```javascript
Vue.config.ignoredElements = [/c-\w*/]
Vue.use(VueRouter)
```

Use `c-theme` component in the template

```html
<c-theme name="scania" global="true"></c-theme>
```

If the `global` attribute set to true, it will add bootstrap 4 styling classes & javascript

We also configured the routers active class and mount the app to the body node

## Run with local corporate-ui and scania-theme
<details>
  <summary>
  How to setup vue with local Corporate-Ui and Scania-theme?
  </summary>

  clone both scania-theme and corporate-ui

  Create npm links of **Corporate Ui** and **Scania theme**
  ```bash
  cd ../corporate-ui
  npm link
  cd ../scania-theme
  npm link
  ```

  Add links to **Corporate Ui** and **Scania theme**
  ```bash
  npm run link
    // or
  cd corporate-ui-site
  npm link corporate-ui
  npm link scania-theme
  ```
</details>


