function isAsyncAwaitSupport(): boolean {
    let func;
    try {
        eval("func = async function(){};");
    } catch (e) {
        return false;
    }
    // 由于async函数的构造器不是全局对象，所以我们需要由下面代码来获取async函数的构造器
    return Object.getPrototypeOf(func).constructor != null;
}

export { isAsyncAwaitSupport };