/*=========================================================
PEQUEAVENTURA MUSICAL
script.js
PARTE 1
=========================================================*/

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});

/*=========================================
MENÚ RESPONSIVE
=========================================*/

const menuButton = document.querySelector(".menu-mobile");

const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});

/*=========================================
CERRAR MENÚ AL HACER CLICK
=========================================*/

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

/*=========================================
BOTÓN IR ARRIBA
=========================================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTop.style.display = "flex";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
HEADER CON SOMBRA
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(255,255,255,.98)";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.10)";

    }

    else{

        header.style.background="rgba(255,255,255,.92)";

        header.style.boxShadow="none";

    }

});

/*=========================================
CARRUSEL
=========================================*/

const slides=document.querySelectorAll(".slide");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

let current=0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

next.addEventListener("click",()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

});

prev.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=slides.length-1;

    }

    showSlide(current);

});

/*=========================================
AUTO PLAY
=========================================*/

setInterval(()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

},5000);

/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".card,.hero-text,.hero-image,.promo-image,.promo-text,.contact-form,.contact-info"

);

function reveal(){

    const trigger=window.innerHeight*0.85;

    revealElements.forEach(element=>{

        const top=element.getBoundingClientRect().top;

        if(top<trigger){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/*=========================================
EFECTO PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-image");

    const value=window.scrollY*0.08;

    hero.style.transform=`translateY(${value}px)`;

});

/*=========================================
EFECTO BOTONES
=========================================*/

const buttons=document.querySelectorAll(

".btn-principal,.btn-secundario,.btn-contacto"

);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

/*=========================================
EFECTO TARJETAS
=========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) rotate(-1deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*=========================================================
PEQUEAVENTURA MUSICAL
SCRIPT.JS
PARTE 2
=========================================================*/

/*=========================================
VALIDACIÓN DEL FORMULARIO
=========================================*/

const formulario = document.querySelector(".contact-form form");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nombre=this.querySelector('input[type="text"]');

const correo=this.querySelector('input[type="email"]');

const telefono=this.querySelectorAll("input")[2];

const mensaje=this.querySelector("textarea");

if(nombre.value.trim()==""){

alert("Ingrese su nombre.");

nombre.focus();

return;

}

if(correo.value.trim()==""){

alert("Ingrese su correo.");

correo.focus();

return;

}

if(mensaje.value.trim().length<10){

alert("Escriba un mensaje más detallado.");

mensaje.focus();

return;

}

alert("¡Gracias por contactarnos! Muy pronto nos comunicaremos contigo.");

this.reset();

});

}

/*=========================================
ANIMACIÓN DE BURBUJAS
=========================================*/

const bubbles=document.querySelectorAll(".bubble");

bubbles.forEach((bubble,index)=>{

bubble.style.animationDelay=(index*2)+"s";

});

/*=========================================
EFECTO FLOTANTE DE ICONOS
=========================================*/

const icons=document.querySelectorAll(".hero-icons div");

icons.forEach((icon,index)=>{

setInterval(()=>{

icon.style.transform="translateY(-8px)";

setTimeout(()=>{

icon.style.transform="translateY(0px)";

},800);

},2500+(index*400));

});

/*=========================================
EFECTO PULSO EN BOTONES
=========================================*/

setInterval(()=>{

document.querySelectorAll(".btn-principal").forEach(btn=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],{

duration:900

});

});

},6000);

/*=========================================
EFECTO EN REDES SOCIALES
=========================================*/

document.querySelectorAll(".social a").forEach(red=>{

red.addEventListener("mouseenter",()=>{

red.style.transform="translateY(-10px) rotate(12deg)";

});

red.addEventListener("mouseleave",()=>{

red.style.transform="translateY(0px) rotate(0deg)";

});

});

/*=========================================
ANIMACIÓN DE TÍTULOS
=========================================*/

const titles=document.querySelectorAll("h1,h2,h3");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

titles.forEach(title=>{

observer.observe(title);

});

/*=========================================
EFECTO EN IMÁGENES
=========================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".5s";

img.style.transform="scale(1.04)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*=========================================
EFECTO DE BRILLO EN TARJETAS
=========================================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.95),
#ffffff 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#ffffff";

});

});

/*=========================================
MENSAJE DE BIENVENIDA
=========================================*/

setTimeout(()=>{

console.log("%c🎵 Bienvenido a PequeAventura Musical 🎵",

"color:#ff4d9d;font-size:20px;font-weight:bold;");

},1000);

/*=========================================
PREVENIR DOBLE CLICK EN BOTONES
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("dblclick",(e)=>{

e.preventDefault();

});

});

/*=========================================
EFECTO SUAVE EN SCROLL
=========================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll){

header.style.top="-100px";

}else{

header.style.top="0";

}

lastScroll=current;

});

/*=========================================
ANIMACIÓN DE ENTRADA HERO
=========================================*/

window.addEventListener("load",()=>{

const heroText=document.querySelector(".hero-text");

const heroImage=document.querySelector(".hero-image");

heroText.animate([

{

opacity:0,

transform:"translateX(-80px)"

},

{

opacity:1,

transform:"translateX(0)"

}

],{

duration:1000,

fill:"forwards"

});

heroImage.animate([

{

opacity:0,

transform:"translateX(80px)"

},

{

opacity:1,

transform:"translateX(0)"

}

],{

duration:1200,

fill:"forwards"

});

});

/*=========================================
FIN DEL SCRIPT
=========================================*/

console.log("Proyecto cargado correctamente.");
