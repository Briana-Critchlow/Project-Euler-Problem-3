
let numbers = [];

for (let b = 1; b < 100; b++) {
    numbers.push(b);
}

let primeNums = [];

for (let i = 0; i < numbers.length; i++) {
    function test_prime(n) {

        if (n === 1) {
            return false;
        }
        else if (n === 2) {
            primeNums.push(n);
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            primeNums.push(n);
        }
    }

    (test_prime(numbers[i]));
}

console.log(primeNums);