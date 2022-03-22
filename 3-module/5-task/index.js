function getMinMax(str) {
  let min = 0;
  let max = 0;

  str.split(' ').forEach(element => {
    element = +element;
    if(element > max) max = element;
    else if(element < min) min = element;
  });

  return {'min': min, 'max': max}
}