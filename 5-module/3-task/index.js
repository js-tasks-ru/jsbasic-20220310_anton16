function initCarousel() {
  let leftBtn = document.querySelector(".carousel__arrow_left");
  let rightBtn = document.querySelector(".carousel__arrow_right");
  let carousel = document.querySelector(".carousel__inner");
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
