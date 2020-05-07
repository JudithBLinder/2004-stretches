// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        throw 'not a number!';
    }

    let result = num1 * num2;
    return result;
};

module.exports = { multiply };