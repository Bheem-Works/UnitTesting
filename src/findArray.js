// to find out the array index through the another index value;

export function findArray(param1, param2) {
  let indexResult = [];
  for (let i = 0; i < param2.length; i++) {
    let index = param2[i];
    if (index >= 0 && index < param1.length) {
      const storeIndex = param1[index];
      indexResult.push(storeIndex);
    }
  }
  return indexResult;
}

console.log(findArray([1, 2, 3, 4, 5, 6], [1, 3]));
