# Corporate UI in a Vue application

To run this project locally you will need NodeJS locally then.
Simply clone this repo, install all dependencies and start it:
```
git clone https://github.com/scania/corporate-ui-vue.git
cd corporate-ui-vue
npm i
npm start
```

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
We also configured the routers active class and mount the app to the body node

## Run with local corporate-ui
<details>
  <summary>
  Local setup
  </summary>


  Create npm links of **Corporate Ui** and **Scania theme**
  ```
  cd ../corporate-ui
  npm link
  cd ../scania-theme
  npm link
  ```

  Add links to **Corporate Ui** and **Scania theme**
  ```
  npm run link
    // or
  cd corporate-ui-site
  npm link corporate-ui
  npm link scania-theme
  ```
</details>