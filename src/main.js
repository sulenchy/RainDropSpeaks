'use strict'

// exports the rainDropSpeak function
module.exports = {
  // function 'rainDropSpeak' with argument 'value'
  rainDropSpeak: (value) => {
    // this block test whether the value passed is a number or not
    if (typeof (value) !== 'number') {
      return 'undefined';
    }
    // test whether the value entered is less than zero or not
    else if (value <= 0) {
      return 'undefined';
    }

    // empty list of prime numbers,
    const primeNumberArr = [];
    const primeFactorArr = [];
    for (let i = 1; i < value; i += 1) {
      let count = 0;
      for (let j = 1; j <= i; j += 1) {
        if (i % j === 0) {
          count += 1;
        }
      }
      if (count === 2) {
        primeNumberArr.push(i);
      }
    }
    for (var i = 0; i < primeNumberArr.length; i++) {
      if (value % primeNumberArr[i] == 0) {
        primeFactorArr.push(primeNumberArr[i]);
      }

    }
    let res = '';
    for (var i = 0; i < primeFactorArr.length; i++) {
      if (primeFactorArr[i] == 3) {
        res += 'Pling';
      } else if (primeFactorArr[i] == 5) {
        res += 'Plang';
      } else if (primeFactorArr[i] == 7) {
        res += 'Plong';
      }
    }
    if (res == '') {
      return value;
    }
    return res;



  }
};
