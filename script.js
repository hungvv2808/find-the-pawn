function getRandomArray(limit, from = -100000, to = 100000) {
  var arr = [];
  let index = 0;
  while(arr.length < limit) {
    var r = Math.floor(Math.random() * from);
    if (r < from || r > to) {
      continue;
    }
    arr.push(r);
    if (index === limit) {
      return;
    }
    index += 1;
  }
  return arr;
}

const arr = [2, 3, -1, 1, 3];
function solution(arr) {
  let total = 0;
  let position = 0;
  
  for (let i in arr) {
    if (0 === i) {
      total = position + arr[i];
    }
    total += arr[position];
    position = total;

    if (!arr.includes(position)) {
      console.log('Pawn: ' + total + ' is out of array, return -1');
      return -1;
    }
    console.log('Pawn: Total + A[position] = ' + total + ' + A[' + position  + '] = ' + total + ' + ' + arr[position]);
  }
}

solution(arr)