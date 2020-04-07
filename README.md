
# SCSS Support

* `sass-loader` : loads a `scss/sass` file and compiles it to CSS. `sass-loader` needs `node-sass` or `dart sass`.
* `node-sass`
* `css-loader` : It handle CSS files
* `style-loader` : The style-loader takes CSS and inserts it into page, so that styles are active on the page.

**These are for production [To extend browser support] Read and Add these to project**
* `postcss-loader` : process CSS to work on older browser
* `autoprefixer` : postcss plugin for vendor prefixes
* `mini-css-extract-plugin` : extract css out of the javascript bundle into a separate file, essential for production builds.

# Check these loader

* `file-loader`
* `url-loader`


# assets.d.ts

For importing assests in typescript. -> Need to do some research


# Babel

* babel/core: The core babel library
* babel/preset-env: Is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)This is also known as browser polyfills
* babel/preset-react: Transform React JSX into regular JavaScript code
* babel-loader: Webpack loader helper


# Bootstrap

[React-Bootstrap](https://react-bootstrap.github.io/) is better option than importing bootstrap, bootstrap has dependency over `jquery` and `popper` which will make the bundle size over 300Kb.

**Important**

When using react-bootstrap, import components like below:

```javascript
import  Alert  from 'react-bootstrap/Alert';
```



Don't use

```javascript
import { Alert }  from 'react-bootstrap';
```

Don't know why tree shaking doesn't work on this one.



# Optimization

## Dividing bundle into multiple chunks

```javascript
optimization: {
        splitChunks: {
            cacheGroups: {
                
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    chunks: 'initial',
                    name: 'reactVendor',
                    enforce: true
                },
                
                gsapVendor: {
                    test: /gsap/,
                    chunks: 'initial',
                    name: 'gsapVendor',
                    enforce: true
                },
                
            }
        }
    }

```





# TODO

* create a module path for `SVG` and `SCSS`

```typescript
import rocket from '@svg/rocket1.svg`;
```

* Get more information about `babel` setting with typescript.

* check the config from webpack for HMR and devServer.

* Code-splitting in webpack 

