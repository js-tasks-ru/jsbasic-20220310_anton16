import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    this.carouselHolder = document.querySelector('[data-carousel-holder]');
    this.carousel = new Carousel(slides);
    this.carouselHolder.append(this.carousel.elem);

    this.ribbonMenuHolder = document.querySelector('[data-ribbon-holder]');
    this.ribbonMenu = new RibbonMenu(categories);
    this.ribbonMenuHolder.append(this.ribbonMenu.elem);

    this.stepSliderHolder = document.querySelector('[data-slider-holder]');
    this.stepSlider = new StepSlider({
      steps: 5,
      value: 3
    });
    this.stepSliderHolder.append(this.stepSlider.elem);

    this.cartIconHolder = document.querySelector('[data-cart-icon-holder]');
    this.cartIcon = new CartIcon();
    this.cartIconHolder.append(this.cartIcon.elem);
    this.cart = new Cart(this.cartIcon);

    this.productsGridHolder = document.querySelector('[data-products-grid-holder]');
    const products = await fetch('products.json')
      .then(response => response.json());
      
    
    this.products = products;
    this.productsGrid = new ProductsGrid(this.products);
    this.productsGridHolder.append(this.productsGrid.elem);
    this.productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: this.stepSlider.value,
      category: this.ribbonMenu.value
    });

    document.body.addEventListener('product-add', (event) => {
      this.cart.addProduct(this.products.filter(product => product.id === event.detail)[0]);
    });

    this.stepSlider.elem.addEventListener('slider-change', (event) =>{
      this.productsGrid.updateFilter({
        maxSpiciness: event.detail
      });
    });

    this.ribbonMenu.elem.addEventListener('ribbon-select', (event) => {
      this.productsGrid.updateFilter({
        category: event.detail
      });
    });

    document.body.addEventListener('change', (event) => {
      switch(event.target.id){
        case 'nuts-checkbox':
          this.productsGrid.updateFilter({
            noNuts: event.target.checked
          });
          break;
        case 'vegeterian-checkbox':
          this.productsGrid.updateFilter({
            vegeterianOnly: event.target.checked
          });
          break;
      }
    });
  }
}
