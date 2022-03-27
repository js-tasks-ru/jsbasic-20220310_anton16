function highlight(table) {
  let statusColNum = 0;
  let genderColNum = 0;
  let ageColNum = 0;
  for(let i = 0; i < table.rows[0].cells.length; i++){
    try{
      switch(table.rows[0].cells[i].innerHTML){
        case "Status":
          statusColNum = i;
          break;
        case "Gender":
          genderColNum = i;
          break;
        case "Age":
          ageColNum = i;
          break;
      }
    }catch{

    }
  }
  for(let i = 1; i < table.rows.length; i++){
    switch(table.rows[i].cells[statusColNum].getAttribute("data-available")){
      case "true":
        table.rows[i].classList.add("available");
        break;
      case "false":
        table.rows[i].classList.add("unavailable");
        break;
      default:
        table.rows[i].hidden = true;
        break;
    }
    switch(table.rows[i].cells[genderColNum].innerHTML){
      case "m":
        table.rows[i].classList.add("male");
        break;
      case "f":
        table.rows[i].classList.add("female");
        break;
    }
    if(table.rows[i].cells[ageColNum].innerHTML < 18){
      table.rows[i].style.cssText ="text-decoration: line-through";
    }
  }
}
