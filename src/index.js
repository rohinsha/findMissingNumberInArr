// Input: arr[] = {5,7,4,2,6,1}
//        k = 7
// Output: {3}

function findElem(arr, len) {
  for (let i = 0; i < len - 1; i++) {
    if (!arr.includes(i + 1)) return i + 1;
  }
}

let arr = [3, 2];
let res = findElem(arr, 3);
console.log(res);
