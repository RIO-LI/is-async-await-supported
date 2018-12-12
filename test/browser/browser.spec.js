describe('Browser Global var test suite', function () {
    try {
        eval('async function func() {}');
        isCanRunAsync = true;
    } catch (e) {
        isCanRunAsync = false;
    }
    it('global isAsyncAwaitSupport() method has defined', function () {
        expect(isAsyncAwaitSupport).not.toBeNull();
    });
    it('current browser async/await supported: ' + isCanRunAsync + ', and library run result is equal', function () {
        expect(isAsyncAwaitSupport()).toEqual(isCanRunAsync);
        console.log('the isAsyncAwaitSupport() result is: ' + isAsyncAwaitSupport());
    });
})
