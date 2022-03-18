function sumSalary(salaries) {
  let result = 0;
  for (let salary in salaries){
    console.log(salaries[salary]);
    if(typeof salaries[salary] == 'number' && !isNaN(salaries[salary]) && Math.abs(salaries[salary]) != Infinity){
      result += salaries[salary];
      console.log('result iteration=',result);
    }
  }
  return result;
}