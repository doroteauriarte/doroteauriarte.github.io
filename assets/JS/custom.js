//_______________________GALERIA DE IMAGENES___________________________

const placas = [
  "Imagenes/placas/abstraccion.png",
  "Imagenes/placas/africa.png",
  "Imagenes/placas/atraccion.png",
  "Imagenes/placas/autorretrato.png",
  "Imagenes/placas/cacatua.png",
  "Imagenes/placas/frutos.png",
  "Imagenes/placas/Guggenheim Bilbao.png",
  "Imagenes/placas/libelula.png",
  "Imagenes/placas/Mariposas.png",
  "Imagenes/placas/mi_caricatura.png",
  "Imagenes/placas/morte_in_mare.png",
  "Imagenes/placas/Mujer.png",
  "Imagenes/placas/mujer_africana.png",
  "Imagenes/placas/orquideas.png",
  "Imagenes/placas/paisaje_fantastico.png",
  "Imagenes/placas/paisaje_nevado.png",
  "Imagenes/placas/pajaros.png"
];

const slides = [
  "Imagenes/cuadros/abstraccion.jpg",
  "Imagenes/cuadros/africa.jpg",
  "Imagenes/cuadros/atraccion.jpg",
  "Imagenes/cuadros/autorretrato.jpg",
  "Imagenes/cuadros/cacatua.jpg",
  "Imagenes/cuadros/frutos.jpg",
  "Imagenes/cuadros/guggenheim_bilbao.jpg",
  "Imagenes/cuadros/libelula.jpg",
  "Imagenes/cuadros/mariposas.jpg",
  "Imagenes/cuadros/mi_caricatura.jpg",
  "Imagenes/cuadros/morte_in_mare.jpg",
  "Imagenes/cuadros/mujer.jpg",
  "Imagenes/cuadros/mujer_africana.jpg",
  "Imagenes/cuadros/Orquídeas.jpg",
  "Imagenes/cuadros/Paisaje_fantástico.jpg",
  "Imagenes/cuadros/paisaje_nevado.jpg",
  "Imagenes/cuadros/pajaros.jpg"
];
const slider = document.getElementById('slider');

for (let i = 0; i < slides.length; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const imgCuadro = document.createElement('img');
  imgCuadro.src = slides[i];
  slide.appendChild(imgCuadro);
  const imgPlaca = document.createElement("img");
  imgPlaca.src = placas[i];
  imgPlaca.classList.add("placa");
  slide.appendChild(imgPlaca);
  slider.appendChild(slide);
}

let salida = slides.length - 1;
let principal = 0;
let entrada = 1;
slider.children.item(salida).classList.add('salida');
slider.children.item(principal).classList.add('principal');
slider.children.item(entrada).classList.add('entrada');

setInterval(() => {
  const salidaElm = slider.children.item(salida);
  salidaElm.ontransitionend = () => {
    salidaElm.classList.remove('salida', 'saliendo');
    salidaElm.ontransitionend = undefined;
  }
  salidaElm.classList.add('saliendo');

  salida = principal;

  const principalElm = slider.children.item(principal);
  principalElm.ontransitionend = () => {
    principalElm.classList.add('salida');
    principalElm.classList.remove('principal-salida', 'principal');
    principalElm.ontransitionend = undefined;
  }
  principalElm.classList.add('principal-salida');

  principal = entrada;

  const entradaElm = slider.children.item(entrada);
  entradaElm.ontransitionend = () => {
    entradaElm.classList.add('principal');
    entradaElm.classList.remove('entrada-principal', 'entrada');
    entradaElm.ontransitionend = undefined;
  }
  entradaElm.classList.add('entrada-principal');

  entrada = ((entrada + 1) < slides.length) ? entrada + 1 : 0;

  const nuevoEntrada = slider.children.item(entrada);
  nuevoEntrada.ontransitionend = () => {
    nuevoEntrada.classList.add('entrada');
    nuevoEntrada.classList.remove('entrando');
    nuevoEntrada.ontransitionend = undefined;
  }
  nuevoEntrada.classList.add('entrando');
}, 3000)

//_______________________BOTON SUBIR___________________________

document.getElementsByClassName("subir").item(0).addEventListener("click", function () {
  window.scroll({ top: 0, behavior: "smooth" })
});

document.querySelector('a[href="#expo"').addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById('expo').scrollIntoView({ behavior: "smooth" })
});
document.querySelector('a[href="#galeria"').addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById('galeria').scrollIntoView({ behavior: "smooth" })
});
document.querySelector('a[href="#redes"').addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById('redes').scrollIntoView({ behavior: "smooth" })
});