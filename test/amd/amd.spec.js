describe('AMD test suite', function () {
    var util;
    var isCanRunAsync;
    try {
        eval('async function func() {}');
        isCanRunAsync = true;
    } catch (e) {
        isCanRunAsync = false;
    }
    beforeEach(function (done) {
        require(['../../lib/is-async-await-supported'], function (obj) {
            util = obj;
            done();
        });
    });
    it('is-async-await-supported AMD mode can load', function (done) {
        expect(util).not.toBeNull();
        expect(util.isAsyncAwaitSupport).not.toBeNull();
        expect(typeof util.isAsyncAwaitSupport).toEqual('function');
        done();
    });
    it('current browser async/await supported: ' + isCanRunAsync + ', and library run result is equal', function (done) {
        expect(util.isAsyncAwaitSupport()).toEqual(isCanRunAsync);
        console.log('the isAsyncAwaitSupport() result is: ' + util.isAsyncAwaitSupport());
        done();
    });
})
