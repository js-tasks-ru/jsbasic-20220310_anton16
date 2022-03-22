function getMinMax(str) {
  let min = NaN;
  let max = NaN;

  str.split(' ').forEach(element => {
    element = +element;
    if(isNaN(min)) min = element;
    if(isNaN(max)) max = element;
    if(element > max) max = element;
    else if(element < min) min = element;
  });

  return {'min': min, 'max': max}
}