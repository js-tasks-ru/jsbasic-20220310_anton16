function camelize(str) {
  let arr = str.split('-');
  return arr.shift() + arr.map(s => s.slice(0,1).toUpperCase() + s.slice(1, s.length)).join('');
}