
let numbers = [];

for (let b = 1; b < 20; b++) {
    numbers.push(b);
}

for (let i = 0; i < numbers.length; i++) {
    function test_prime(n) {

        if (n === 1) {
            return false;
        }
        else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    console.log(test_prime(numbers[i]));
}

