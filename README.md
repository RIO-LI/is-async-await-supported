# is-async-await-supported
Check if async/await is available

## Browser

```javascript
isAsyncAwaitSupport(); // true means async/await is available
```

## AMD
```javascript
require(['${you project location}/is-async-await-supported.min'], function (util) {
    console.log(util.isAsyncAwaitSupport());
})
```

## CMD/Nodejs/webpack
```javascript
const isAsyncAwaitSupport = require('is-async-await-supported');
isAsyncAwaitSupport(); // true means async/await is available
```
