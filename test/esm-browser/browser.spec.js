import { isAsyncAwaitSupport } from '../../lib/is-async-await-supported.esm.js';
describe('Browser ESModule test suite', function () {
    var isCanRunAsync;
    try {
        eval('async function func() {}');
        isCanRunAsync = true;
    } catch (e) {
        isCanRunAsync = false;
    }
    it('Browser is-async-await-supported ESModule can be load, isAsyncAwaitSupport() method has defined', function () {
        expect(isAsyncAwaitSupport).not.toBeNull();
    });
    it('current browser async/await supported: ' + isCanRunAsync + ', and library run result is equal', function () {
        expect(isAsyncAwaitSupport()).toEqual(isCanRunAsync);
        console.log('the isAsyncAwaitSupport() result is: ' + isAsyncAwaitSupport());
    });
})
