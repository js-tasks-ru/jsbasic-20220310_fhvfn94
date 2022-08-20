function filterRange(arr, a, b) {
  let r = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= a && arr[i] <= b){
      r.push(arr[i])
    }
  }
  return r
}

console.log(filterRange([5,3,8,1], 1, 4));
