module.exports = function multiply(first, second) {
  let a = new MyBigInt(first);
  let b = new MyBigInt(second);
  return a.multiply(b);
}

class MyBigInt {
  constructor(value) {
    this.value = value.split('')
                      .map(Number)
                      .reverse();
  }

  multiply(second) {
    let res = Array(this.value.length + second.value.length).fill(0);

    for (let j = 0; j < second.value.length; j++) {
      let digit2 = second.value[j];

      let over = 0;
      for (let i = 0; i < this.value.length; i++) {
        let digit1 = this.value[i];

        let m = digit1 * digit2 + over + res[i+j];
        res[i+j] = m % 10;
        over = Math.floor(m / 10);
      }

      if (over > 0)
        res[j + this.value.length] = over;

    }
    while (res[res.length - 1] === 0)
      res.pop();

    return res.reverse().map(String).join('');
  }
}