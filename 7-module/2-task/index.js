import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = document.createElement("div");
    this.modal.classList.add("modal");

    this.overlay = document.createElement("div");
    this.overlay.classList.add("modal__overlay");

    this.elem = document.createElement("div");
    this.elem.classList.add("modal__inner");
    document.addEventListener('keydown', this.escape);
    this.modal.append(this.overlay);
    this.modal.append(this.elem);

    this.titleElem = createElement(`
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
    `);
    const closeBtn = this.titleElem.querySelector('.modal__close');
    closeBtn.addEventListener('click', (event) =>{
      this.close();
    });
    this.elem.append(this.titleElem);

    this.bodyElem = document.createElement('div');
    this.bodyElem.classList.add("modal__body");
    this.elem.append(this.bodyElem);
  }
  
  setTitle(title){
    const modalTitle = this.titleElem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }
  
  setBody(node){
    this.bodyElem.append(node);
  }

  open(){
    document.body.classList.add('is-modal-open');
    document.body.append(this.modal);
  }

  close(){
    this.modal.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.escape);
  }

  escape = (event) => {
    if(event.code === 'Escape'){
      this.close();
    } 
  }
}
