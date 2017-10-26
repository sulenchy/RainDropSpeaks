
// function 'rainDropSpeak' with argument 'value'
const rainDropSpeak = (value) => {
  if (typeof (value) !== 'number' || value <= 0) {
    return 'undefined';
  }

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
  for (let i = 0; i < primeNumberArr.length; i += 1) {
    if (value % primeNumberArr[i] === 0) {
      primeFactorArr.push(primeNumberArr[i]);
    }
  }
  let res = '';
  for (let i = 0; i < primeFactorArr.length; i += 1) {
    if (primeFactorArr[i] === 3) {
      res += 'Pling';
    } else if (primeFactorArr[i] === 5) {
      res += 'Plang';
    } else if (primeFactorArr[i] === 7) {
      res += 'Plong';
    }
  }
  if (res === '') {
    return value;
  }
  return res;
};


export default{ rainDropSpeak };
