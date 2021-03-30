// Параллельные вычисления

function parallel(args, callback) {
    let i = 0;
    let n = 0;
    let result = [];
    
    for (let v of args){
        const counter = i++;
        const a = v( input => {
            result[counter] = input;
            n++;
            if(n === args.length){
                callback(result);
            }
        });
        
        if (typeof a === "number") {
            result[counter] = a;
            n++;
            if(n === args.length){
                callback(result);
            }
        }
    }
}


parallel([
	function (resolve) {
		setTimeout(function () {
			resolve(10);
		}, 50);
	},
	function () {
		return 5;
	},
	function (resolve) {
		setTimeout(function () {
			resolve(0);
		}, 10)
	}
], function (results) {
	console.log(results); // [10, 5, 0]
});
