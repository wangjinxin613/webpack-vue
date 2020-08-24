
export function reverse(x: number): number {
  const result = [...x.toString()].reverse();
  // 如果开头有零则去掉零
  let notZero = false;
  let zeroIndex = 0;
  for(const i in result) {
    if(result[i] !== '0') {
      notZero = true;
    }
    if(result[i] === '0' && !notZero) {
      zeroIndex = Number(i);
    }
  } 
  result.splice(0, zeroIndex);

  // 如果是负数
  if(x < 0) {
    result.pop();
    result.unshift('-');
  }

  let num = 0;
  num = Number(result.join(''));
  
  // 只能存储三十二位数字
  if(num < Math.pow(-2,31) || num > Math.pow(2, 31)) {
    num = 0;
  }
  return num;
}

// console.log(reverse(901000));

