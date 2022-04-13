import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    const leftBtn = this.elem.querySelector(".ribbon__arrow_left");
    const rightBtn = this.elem.querySelector(".ribbon__arrow_right");
    this.categories.forEach(category => {
      ribbonInner.append(new RibbonItem(category).elem);
    });

    leftBtn.addEventListener('click', (event) =>{
      const scrollSize = 350;
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth; 
      ribbonInner.scrollBy(-scrollSize, 0);
      if(scrollLeft < scrollSize) leftBtn.classList.remove("ribbon__arrow_visible");
      if(scrollRight >= scrollSize) rightBtn.classList.add("ribbon__arrow_visible");
    });

    rightBtn.addEventListener('click', (event) =>{
      const scrollSize = 350;
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth; 
      ribbonInner.scrollBy(scrollSize, 0);
      if(scrollRight < scrollSize) rightBtn.classList.remove("ribbon__arrow_visible");
      if(scrollWidth >= scrollSize) leftBtn.classList.add("ribbon__arrow_visible");
    });
    
    this.elem.addEventListener('ribbon-select', (event)=>{
      const activeItem = ribbonInner.querySelector(".ribbon__item_active");
      if(activeItem !== null) activeItem.classList.remove("ribbon__item_active");
    });
  }
}

class RibbonItem{
  constructor(category){
    this.category = category;
    this.elem = createElement(`<a href="#" class="ribbon__item" data-id="${this.category.id}">${this.category.name}</a>`);
    this.elem.addEventListener('click', (event) => {
      event.preventDefault();
      const ribbonSelectEvent = new CustomEvent('ribbon-select', { 
        detail: category.id, 
        bubbles: true
      });
      this.elem.dispatchEvent(ribbonSelectEvent);
      event.target.classList.add("ribbon__item_active");
    });
  }
}