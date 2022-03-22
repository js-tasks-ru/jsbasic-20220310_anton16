function sumSalary(salaries) {
  let result = 0;
  for (let salary in salaries){
    if(typeof salaries[salary] == 'number' && !isNaN(salaries[salary]) && Math.abs(salaries[salary]) != Infinity){
      result += salaries[salary];
    }
  }
  return result;
}