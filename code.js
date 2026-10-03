const miTitulo = document.getElementById('titulo-principal');

console.log(miTitulo); //Si abres la consola del navegador, veras la etiqueta HTML ahi

const primerParrafo = document.querySelector('.texto-destacado');
console.log(primerParrafo);


const enlaceMenu = document.querySelector('nav ul li a');
console.log(enlaceMenu);

//traemos todos los elementos que tengan la clase card
const todaslasTargetas = document.querySelectorAll('.card');
console.log("todas las targetas encontradas", todaslasTargetas.length);

const boton = document.getElementById('btn-enviar');
boton.textContent = "procesando...";

const contenedor = document.getElementById('mi-seccion');
contenedor.innerHTML = "<h2>Bienvenido</h2><p>Gracias por visitarnos</p>"

// Buscamos los elementos 'img' y 'a' y lo guardamos en constantes (v
const miImagen = document.querySelector('.foto-perfil');
const miEnlace = document.querySelector('link-externo');

//Forma recomendada usando métodos oficiales
miImagen.setAttribute('src', 'img/nueva-foto.jpg');
miImagen.setAttribute('alt', "Foto de perfil actualizada");

miEnlace.href = "https://www.google.com";
