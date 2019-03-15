
function sortStack(s1) {
  let s2 = [s1.pop()];
  
  while (s1.length > 0) {
    let hold = s1.pop();
    let count = 0;

    while (s2.length && s2[s2.length - 1] > hold) {
      s1.push(s2.pop());
      count++;
    }

    s2.push(hold)
    for(null; count > 0; count--) {
      s2.push(s1.pop());
    }
  }
  return s2;
}

let arr = [5, 3, 4, 2, 1];
// let arr = [1, 2, 4, 3, 5];

console.log(sortStack(arr));