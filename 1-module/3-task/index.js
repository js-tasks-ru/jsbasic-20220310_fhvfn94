function ucFirst(str) {
  if (str.length == 0) {
      return ""
  }
  let r = ""
  for(let i = 1; i < str.length; i++) {
      r += str[i]
  }
  return str[0].toUpperCase() +r
}

console.log(ucFirst("вася"));
