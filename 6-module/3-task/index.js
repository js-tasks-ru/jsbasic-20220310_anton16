import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      </div>
    </div>
    `)
    const carouselInner = this.elem.querySelector('.carousel__inner');
    slides.forEach(element => {
      carouselInner.append(new CarouserSlide(element).elem);
    });
    this.initCarousel();
  }

  initCarousel() {
    let leftBtn = this.elem.querySelector(".carousel__arrow_left");
    let rightBtn = this.elem.querySelector(".carousel__arrow_right");
    let carousel = this.elem.querySelector(".carousel__inner");
    let elemIndex = 0;
    leftBtn.style.display = 'none';
    leftBtn.addEventListener('click', (event) =>{
      elemIndex++;
      carousel.style.transform = `translateX(${carousel.offsetWidth * elemIndex}px)`;
      if(elemIndex == 0) leftBtn.style.display = 'none';
      if(elemIndex == -carousel.children.length + 2)  rightBtn.style.display = '';
      
    });
    rightBtn.addEventListener('click', (event) =>{
      elemIndex--;
      carousel.style.transform = `translateX(${carousel.offsetWidth * elemIndex}px)`;
      if(elemIndex == -1)leftBtn.style.display = '';
      if(elemIndex == -carousel.children.length + 1)  rightBtn.style.display = 'none';
    });
  }
}

class CarouserSlide{
  constructor(slide){
    this.slide = slide;
    this.elem = createElement(`
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${this.slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.slide.price.toFixed(2)}</span>
          <div class="carousel__title">${this.slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);
    this.addBtn = this.elem.querySelector('.carousel__button');

    this.addBtn.addEventListener('click', () => {
      const productAddEvent = new CustomEvent("product-add", { 
        detail: this.slide.id, 
        bubbles: true 
      });
  
      this.addBtn.dispatchEvent(productAddEvent);
    });
  }
}