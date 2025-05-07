function isEven(num) {
    return (num & 1) == 0;
}

function factorial(n) {
    if (n < 0) throw Error('factorial of negative integer is not defined');
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    return res;
}
