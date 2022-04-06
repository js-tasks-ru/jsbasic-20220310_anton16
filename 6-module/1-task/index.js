/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows, headers = ['Имя', 'Возраст', 'Зарплата', 'Город','']) {
    this.elem = document.createElement('table');
    const headerRow = this.elem.createTHead().insertRow();
    headers.forEach(element => headerRow.innerHTML += `<th>${element}</th>`);
    const tableBody = this.elem.createTBody();
    rows.forEach(row => new User(row).renderInRow(tableBody));
  }
}

class User{
  constructor(row){
    this.name = row.name,
    this.age = row.age,
    this.salary = row.salary,
    this.city = row.city
    this.btn = document.createElement('button');
    this.btn.innerHTML = 'X';
  }

  renderInRow(tableBody){
    let row = tableBody.insertRow();
    row.insertCell().innerHTML = this.name;
    row.insertCell().innerHTML = this.age;
    row.insertCell().innerHTML = this.salary;
    row.insertCell().innerHTML = this.city;
    row.insertCell().append(this.btn);
    this.btn.addEventListener('click', event => {
      tableBody.deleteRow(row.rowIndex - 1);
    });
  }
}