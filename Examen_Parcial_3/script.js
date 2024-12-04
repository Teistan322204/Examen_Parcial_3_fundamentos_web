const frutas = [
    { nombre: "Manzana", precio: 5, imagen: "assets/Manzanas.webp" },
    { nombre: "Plátano", precio: 3, imagen: "assets/Platanos.webp" },
    { nombre: "Uvas", precio: 10, imagen: "assets/Uvas.webp" },
    { nombre: "Naranja", precio: 4, imagen: "assets/Naranjas.webp" },
    { nombre: "Fresa", precio: 6, imagen: "assets/Fresas.webp" },
    { nombre: "Papaya", precio: 8, imagen: "assets/Papaya.webp" },
    { nombre: "Durazno", precio: 6, imagen: "assets/Durazno.webp" },
    { nombre: "Sandia", precio: 12, imagen: "assets/Sandia.webp" },
    { nombre: "kiwi", precio: 7, imagen: "assets/Kiwi.webp" },
    { nombre: "Piña", precio: 10, imagen: "assets/Piña.webp" },
    { nombre: "Mango", precio: 9, imagen: "assets/Mango.webp" },
    { nombre: "Melon", precio: 10, imagen: "assets/Melon.webp" }
];

const carrito = [];
const totalElement = document.getElementById("total");
const descuentoElement = document.getElementById("descuento");
const listaCarrito = document.getElementById("lista-carrito");

function generarCatalogo() {
    const contenedor = document.querySelector(".frutas-container");
    frutas.forEach((fruta, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${fruta.imagen}" alt="${fruta.nombre}">
            <h3>${fruta.nombre}</h3>
            <p>Precio: $${fruta.precio}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function agregarAlCarrito(index) {
    carrito.push(frutas[index]);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach((fruta) => {
        const item = document.createElement("li");
        item.textContent = `${fruta.nombre} - $${fruta.precio}`;
        listaCarrito.appendChild(item);
        total += fruta.precio;
    });
    if (total > 50) {
        total *= 0.9; // Aplicar descuento del 10%
        descuentoElement.classList.remove("oculto");
    } else {
        descuentoElement.classList.add("oculto");
    }
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function vaciarCarrito() {
    carrito.length = 0;
    actualizarCarrito();
}

document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);

document.addEventListener("DOMContentLoaded", generarCatalogo);