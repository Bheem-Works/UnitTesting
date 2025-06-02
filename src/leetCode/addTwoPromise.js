    /**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
export var addTwoPromises = async function(promise1, promise2) {
    const promiseOne = await promise1;
    const promiseTwo = await promise2;
    const addPromise = promiseOne + promiseTwo;
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(addPromise)
        },300);
    });
}

  addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 .then(console.log); // 4