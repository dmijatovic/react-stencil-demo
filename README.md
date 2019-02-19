This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This demo is part of testing Stencil custom web components. The Stencil repo where used custom component is created [can be found here](https://github.com/dmijatovic/dv4all-stencil-web-components)

## Available Scripts

```bash
  # standard CRA start
  npm start
  # start app without opening new browser
  npm run dev
  # build project
  npm run build

```

## What I need to do to integrate an Stencil component?

This is example concerning the steps when integrating Stencil web component.
In this demo we integrate custom web component called dv4-market-cap-stock-price.

The component depends on Highcharts library. The library is not included in the custom web component. if the Highcharts library is not included in the page the component will show error about this.

- include Highcharts from CDN: in the header of index.html file include the library

```html
<!-- INCLUDE Highcharts library in the header of index.html -->
<script src="https://code.highcharts.com/highcharts.js"></script>
```

- import custom web component from npm into your project

```bash
  npm i -s dv4all-base-web-components
```

- tell React that you will be using custom web components (in the file where React renders the DOM tree, typically index.js)

```Javascript
  // in index.js file

  // import Stencils custom element loader fron your npm library
  import { defineCustomElements } from 'dv4all-base-web-components/dist/loader'

  // at the bottom of index.js file include this line
  //define custom web elements created with Stencil
  defineCustomElements(window)

```
