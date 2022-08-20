function camelize(str) {
  str = str.split("-")
  let r = []
  for(let i = 1; i < str.length; i++) {
    r.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
  }
  return str[0] + r.join("")
}

camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
console.log(camelize('list-style-image'));