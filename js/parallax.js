// let header = document.getElementById("header");

let tituloHeaderPagos = document.getElementById("tituloHeaderPagos");
let subtituloHeaderPagos = document.getElementById("subtituloHeaderPagos");
let cerros = document.getElementById("cerros");
let persona1 = document.getElementById("persona1");
let persona2 = document.getElementById("persona2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  cerros.style.marginTop = value * 0.5 + "px";
  tituloHeaderPagos.style.marginTop = value * 0.7 + "px";
  subtituloHeaderPagos.style.marginTop = value * 1 + "px";
  persona1.style.left = value * 1 + "px";
  persona2.style.left = value * -1 + "px";
  universidad.style.marginTop = value * 0.5 + "px";
});
