import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};

    this.elem = document.createElement("div");
    this.elem.classList.add("products-grid");

    this.productGrid = document.createElement("div");
    this.productGrid.classList.add("products-grid__inner");

    this.elem.append(this.productGrid);

    products.forEach(product => {
      this.productGrid.append(new ProductCard(product).elem);
    });
  }

  updateFilter(filters){
    Object.assign(this.filters,filters);
    let filtred = this.products;
    
    if(this.filters.noNuts){
      filtred = filtred.filter(product => product.nuts != true);
    }
    if(this.filters.vegeterianOnly){
      filtred = filtred.filter(product => product.vegeterian === true);
    }
    if(this.filters.maxSpiciness > 0){
      filtred = filtred.filter(product => product.spiciness <= this.filters.maxSpiciness);
    }
    if(typeof(this.filters.category) !== 'undefined' && this.filters.category.length != ''){
      filtred = filtred.filter(product => product.category == this.filters.category);
    }

    this.productGrid.innerHTML = '';
    filtred.forEach(product => {
      this.productGrid.append(new ProductCard(product).elem);
    });
    
  }
}
