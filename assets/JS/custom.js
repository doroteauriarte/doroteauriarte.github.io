//_______________________GALERIA DE IMAGENES___________________________

// const Splide = require();
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
const slider = document.getElementsByClassName('splide__list').item(0);

for (let i = 0; i < slides.length; i++) {
  const slide = document.createElement('li');
  slide.classList.add('splide__slide', 'slide');
  const imgCuadro = document.createElement('img');
  imgCuadro.src = slides[i];
  slide.appendChild(imgCuadro);
  const imgPlaca = document.createElement("img");
  imgPlaca.src = placas[i];
  imgPlaca.classList.add("placa");
  slide.appendChild(imgPlaca);
  slider.appendChild(slide);
}


const splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 2000,
  arrows: false,
  pagination: false,
  pauseOnHover: false
});
splide.mount();

const imgs = document.querySelectorAll('.splide__slide > img');
imgs.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    if (!splide.Components.Autoplay.isPaused()) {
      splide.Components.Autoplay.pause();
    }
  });
  img.addEventListener('mouseleave', () => {
    if (splide.Components.Autoplay.isPaused()) {
      splide.Components.Autoplay.play();
    }
  });
})
// let salida = slides.length - 1;
// let principal = 0;
// let entrada = 1;
// slider.children.item(salida).classList.add('salida');
// slider.children.item(principal).classList.add('principal');
// slider.children.item(entrada).classList.add('entrada');
// slider.childNodes.forEach((node, idx) => {
//   let iterationStart = 0;
//   switch(idx){
//     case 0:
//       iterationStart = (1 / slides.length * 6) / 17;
//       break;
//     case 1: 
//       iterationStart =(1 / slides.length * 1) / 17;
//       break;
//     case (slides.length - 1): 
//       iterationStart = (1 / slides.length * 11) / 17;
//   }

//   node.animate([
//     { right: "-50%", transform: "scale(.1)" },
//     { right: "0", transform: "scale(.4)", offset: (1 / slides.length * 1) / 17 },
//     { right: "0", transform: "scale(.4)", offset: (1 / slides.length * 5) / 17 },
//     { right: "25%", transform: "scale(1)", offset: (1 / slides.length * 6) / 17 },
//     { right: "25%", transform: "scale(1)", offset: (1 / slides.length * 10) / 17 },
//     { right: "75%", transform: "scale(.4)", offset: (1 / slides.length * 11) / 17 },
//     { right: "75%", transform: "scale(.4)", offset: (1 / slides.length * 15) / 17 },
//     { right: "150%", transform: "scale(.1)", offset: (1 / slides.length * 16) /17 },
//     { right: "-50%", transform: "scale(.1)" }
//   ], {
//     duration: (5000 * (slides.length - 3)),
//     iterations: Infinity,
//     iterationStart,
//     delay: (1 < idx && idx < (slides.length - 1)) ? ((idx - 1) * 1050) : 0 
//   });
// })


// setInterval(() => {
//   const salidaElm = slider.children.item(salida);
//   salidaElm.ontransitionend = () => {
//     salidaElm.classList.remove('salida', 'saliendo');
//     console.count('salidaElm');
//     salidaElm.ontransitionend = undefined;
//   }

//   salidaElm.ontrasitioncancel = ()=> console.log('transition canceled SalidaElm')
//   salidaElm.classList.add('saliendo');

//   salida = principal;
//   const principalElm = slider.children.item(principal);
//   principalElm.ontransitionend = () => {
//     principalElm.classList.add('salida');
//     principalElm.classList.remove('principal-salida', 'principal');
//     console.count('principalElm');
//     principalElm.ontransitionend = undefined;
//   }
//   salidaElm.ontrasitioncancel = ()=> console.log('transition canceled principalElm')
//   principalElm.classList.add('principal-salida');

//   principal = entrada;

//   const entradaElm = slider.children.item(entrada);
//   entradaElm.ontransitionend = () => {
//     entradaElm.classList.add('principal');
//     entradaElm.classList.remove('entrada-principal', 'entrada');
//     console.count('entradaElm');
//     entradaElm.ontransitionend = undefined;
//   }

//   salidaElm.ontrasitioncancel = ()=> console.log('transition canceled entradaElm')
//   entradaElm.classList.add('entrada-principal');

//   entrada = ((entrada + 1) < slides.length) ? entrada + 1 : 0;

//   const nuevoEntrada = slider.children.item(entrada);
//   nuevoEntrada.ontransitionend = () => {
//     nuevoEntrada.classList.add('entrada');
//     nuevoEntrada.classList.remove('entrando');
//     console.count('nuevoEntrada');
//     nuevoEntrada.ontransitionend = undefined;
//   }

//   salidaElm.ontrasitioncancel = ()=> console.log('transition canceled nuevoEntrada')
//   nuevoEntrada.classList.add('entrando');
// }, 3000)

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