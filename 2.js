//http://rubaxa.github.io/playground/#romannumbers
// Реализовать создание следующую запись ;]
// ...

var romanNumbers = [
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function romanize(num) {
    if (num === 0) {
        return '';
    }
    
    for (var i = 0; i < romanNumbers.length; i++) {
        if (num >= romanNumbers[i][0]) {
            return romanNumbers[i][1] + romanize(num - romanNumbers[i][0]);
        }
    }
}

for (let i = 1; i < 15; ++i) {
    Object.defineProperty(Number.prototype, romanize(i), {
        get: function() {
            let result = [];
            let num = 0;
            while (num < i) {
                result.push(num++);
            }
            return result;
        }
    });
}

console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];
