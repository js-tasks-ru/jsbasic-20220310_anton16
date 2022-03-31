function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let txt = document.getElementById("text");
  btn.addEventListener('click', (event) =>{
    txt.hidden = !txt.hidden;
  });
}
