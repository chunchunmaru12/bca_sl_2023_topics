var a = 7;
var isprime = a == 1 ? false : true;
for (let i = 2; i < a; i++) {
    a % i == 0 ? isprime *= false : isprime *= true;
};
alert(`${a} is ${isprime ? 'prime' : 'not prime'} number`);