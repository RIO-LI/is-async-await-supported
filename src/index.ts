import 'function.name-polyfill';

function isAsyncAwaitSupport(): boolean {
    let func;
    let asyncFuncConstructor;
    try {
        eval("func = async function(){};");
    } catch (e) {
        return false;
    }
    // 由于async函数的构造器不是全局对象，所以我们需要由下面代码来获取async函数的构造器
    asyncFuncConstructor = Object.getPrototypeOf(func).constructor;
    return asyncFuncConstructor != null && asyncFuncConstructor.name == 'AsyncFunction';
}

export { isAsyncAwaitSupport };