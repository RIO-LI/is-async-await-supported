const isAsyncAwaitSupportModule = require('../../lib/is-async-await-supported');
describe('CMD ESModule test suite', function () {
    var isCanRunAsync;
    try {
        eval('async function func() {}');
        isCanRunAsync = true;
    } catch (e) {
        isCanRunAsync = false;
    }
    it('CMD is-async-await-supported can be load, isAsyncAwaitSupport() method has defined', function () {
        expect(isAsyncAwaitSupportModule.isAsyncAwaitSupport).not.toBeNull();
    });
    it('current browser async/await supported: ' + isCanRunAsync + ', and library run result is equal', function () {
        expect(isAsyncAwaitSupportModule.isAsyncAwaitSupport()).toEqual(isCanRunAsync);
        console.log('the isAsyncAwaitSupport() result is: ' + isAsyncAwaitSupportModule.isAsyncAwaitSupport());
    });
})
