export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.stepNum = steps;

    this.elem = document.createElement("div");
    this.elem.classList.add("slider");

    this.tumb = document.createElement("div");
    this.tumb.classList.add("slider__thumb");

    this.sliderValue = document.createElement("span");
    this.sliderValue.classList.add("slider__value");
    this.sliderValue.innerHTML = value;
    this.tumb.append(this.sliderValue);

    this.progress = document.createElement("div");
    this.progress.classList.add("slider__progress");

    this.steps = document.createElement("div");
    this.steps.classList.add("slider__steps");

    for(let i = 0; i < steps; i++){
      this.steps.append(document.createElement("span"));
    }
    this.setValue(value);

    this.elem.append(this.tumb);
    this.elem.append(this.progress);
    this.elem.append(this.steps);

    this.elem.addEventListener("click", (event) =>{
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      this.setValue(Math.round(leftRelative * (this.stepNum - 1)));
    });
  }

  setValue(value){
    let currentStep = this.steps.querySelector(".slider__step-active");
    if(currentStep !== null){ 
      currentStep.classList.remove("slider__step-active");
      this.elem.dispatchEvent(new CustomEvent('slider-change',{
        detail: value,
        bubbles: true
      }))
    }
    this.steps.childNodes[value].classList.add("slider__step-active");
    this.sliderValue.innerHTML = value;
    this.tumb.style.left = `${100/(this.stepNum - 1) * value}%`;
    this.progress.style.width = `${100/(this.stepNum - 1) * value}%`;
  }
}
