//http://rubaxa.github.io/playground/#async-reduce
/**
 * Асинхронный reduce
 * @param  {any[]}    input
 * @param  {Function} iterator
 * @param  {any} initialValue
 * @return {Promise}
 */
 
async function asyncReduce(input, iterator, initialValue) {
    let ret = initialValue
    for (let value of input) {
        await value().then((v)=> {ret = iterator(ret, v);});
    }
    
    return ret;
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

asyncReduce(
	[a, c, b],
	(acc, value) => [...acc, value],
	['d']
).then(results => {
	console.log(results); // ['d', 'a', 'c', 'b'];
});
