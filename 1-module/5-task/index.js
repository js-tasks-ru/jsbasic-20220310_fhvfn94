function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let r = ""
    for(let i = 0; i < maxlength -1; i++){
      r += str[i]
    }
    return r+"…"
  }
  return str
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));