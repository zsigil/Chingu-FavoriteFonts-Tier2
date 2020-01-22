# Favorite Fonts -- Tier2

## Overview
---

This app was created as a Chingu Solo Project.

It uses the [Google Fonts API](https://developers.google.com/fonts/docs/getting_started) and the [Google Fonts Developer API](https://developers.google.com/fonts/docs/developer_api) to list different Google fonts and display sample text.

Live link: [https://favoritefonts-1578663865735.firebaseapp.com/](https://favoritefonts-1578663865735.firebaseapp.com/)


## Features
---
#### Main feature
Font cards display sample text in the corresponding font.

/Note: it may take some time to fully load the page and display fonts correctly/

Fonts are sorted by popularity on page load.

#### Other features
* Fonts can be selected by clicking the red 'add' (plus, +) button. This font array is saved in localstorage, and is reloaded on page reload

* Fonts can be searched by typing part of name in the search input ('Search fonts') in the upper left corner of major navigation (case-insensitive). If this input is deleted, fonts will be sorted by popularity again

* Clicking the reset icon in the upper right corner of major navigation will reset page (clears inputs, resets size and light mode) without reloading the page itself

* Clicking the listview icon toggles listview (only available on screens wider than 960px)

* Clicking the dark/light circles will toggle dark/light modes, respectively (only available on screens wider than 960px)

* A sample text is provided for display. Custom text can be added via the second input field ('Type something') - only the first 50 characters will be displayed. Deleting this input will cause the original sample text to display. (only available on screens wider than 960px)

* Font size (20px, 24px, 32px, 40px) can be changed by clicking on the displayed current size (popup menu lists available sizes) (only available on screens wider than 960px)

#### Style
* Design is fully responsive
* Back to top button allows smooth scrolling back to top

#### Navigation
* In the header and footer all links are redirected to the main page, except for the 'ABOUT' link and the link in the footer (both link to the page 'ABOUT').
The 'ABOUT' page was originally not required for this project.

* Unknown routes are redirected to the main page.


## Tech and Dependencies
----
* This is a Vue app created in Vue CLI 3 /Vuex, Babel, Router, Node-Sass, ESLint preinstalled/

* Packages/plugins added:
  * Vuetify
  * axios
  * vue-head
  * gsap (for animating progress)
  * intersection-observer (v-lazy needs polyfill in IE and Safari)
  * vue-browser-detect-plugin (for detecting IE9, IE10, IE11, Safari9)

>This application might be incompatible with some IE versions(9,10,11)/Safari9.(extreme slowness, scrolling issues, loading issues). If using these browsers, a pop-up/sheet will suggest using Chrome/Firefox.

>Please consider using Google Web Font Loader instead of injecting font stylesheets for cross-browser compatibility (project description prohibited using this loader)

## Project setup
*APIKEY (for Google Fonts Developer API) is to be provided(exported) from src/secretkeys.js file*

```
export const APIKEY = "YOUR-API-KEY"
```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
