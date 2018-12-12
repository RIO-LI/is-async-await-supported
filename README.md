# is-async-await-supported
Check if async/await is available

## Browser

```javascript
isAsyncAwaitSupport(); // true means async/await is available
```

## AMD
```javascript
require(['${your path}/is-async-await-supported.min'], function (util) {
    console.log(util.isAsyncAwaitSupport());
})
```

## CMD/Nodejs/webpack
```javascript
const isAsyncAwaitSupport = require('is-async-await-supported').isAsyncAwaitSupport;
isAsyncAwaitSupport(); // true means async/await is available
```

## ES2015+  with webpack or TypeScript with webpack
```javascript
import { isAsyncAwaitSupport } from 'is-async-await-supported';

isAsyncAwaitSupport(); // true means async/await is available
```

## ES2015+ without webpack
```javascript
import { isAsyncAwaitSupport } from '${your path}/is-async-await-supported.esm.js';
isAsyncAwaitSupport(); // true means async/await is available
```