// let header = document.getElementById("header");

let indexHeader_titulo = document.getElementById("indexHeader_titulo");
let indexHeader_subtitulo = document.getElementById("indexHeader_subtitulo");
let indexHeader_btns = document.getElementById("indexHeader_btns");
let cerros = document.getElementById("cerros");
let persona1 = document.getElementById("persona1");
let persona2 = document.getElementById("persona2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  cerros.style.marginTop = value * 0.5 + "px";
  indexHeader_titulo.style.marginTop = value * 0.7 + "px";
  indexHeader_subtitulo.style.marginTop = value * 0.7 + "px";
  indexHeader_btns.style.marginTop = value * 0.2 + "px";
  persona1.style.left = value * 1 + "px";
  persona2.style.left = value * -1 + "px";
  universidad.style.marginTop = value * 0.5 + "px";
});
