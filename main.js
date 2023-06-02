// Variables globales
let carrito = [];
const productos = [
  {
    nombre: "Nike Air Max SYSTM GRIS",
    precio: 200,
  },
  {
    nombre: "Nike Air Max 2021",
    precio: 400,
  },
  {
    nombre: "Air Jordan 1 Mid SE",
    precio: 350,
  },
];

// Cargar el carrito desde el almacenamiento (si existe)
const cargarCarritoDesdeStorage = async () => {
  try {
    const carritoStorage = await new Promise((resolve, reject) => {
      const carritoData = localStorage.getItem("carrito");
      if (carritoData) {
        resolve(JSON.parse(carritoData));
      } else {
        reject("No hay datos de carrito en el almacenamiento");
      }
    });

    carrito = carritoStorage;
  } catch (error) {
    console.error(error);
  }
};

// Funciones para manejar el carrito de compras
const agregarAlCarrito = (nombre, precio) => {
  const producto = {
    nombre: nombre,
    precio: precio,
  };
  carrito.push(producto);
  actualizarCarrito();
  guardarCarritoEnStorage();
};

const actualizarCarrito = () => {
  const carritoLista = document.getElementById("carrito-lista");
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((producto) => {
    const productoLista = document.createElement("li");
    productoLista.innerText = `${producto.nombre} - U$S ${producto.precio}`;
    carritoLista.appendChild(productoLista);
    total += producto.precio;
  });
  const totalElemento = document.createElement("p");
  totalElemento.innerText = `Total: U$S ${total}`;
  carritoLista.appendChild(totalElemento);
};

const vaciarCarrito = () => {
  carrito = [];
  actualizarCarrito();
  guardarCarritoEnStorage();
};

const realizarCompra = () => {
  const nombre = document.getElementById("cliente-nombre").value;
  const email = document.getElementById("cliente-email").value;
  const direccion = document.getElementById("cliente-direccion").value;
  if (carrito.length === 0 || nombre === "" || email === "" || direccion === "") {
    alert("Debe completar todos los campos y agregar productos al carrito para realizar la compra");
  } else {
    alert(`¡Gracias por tu compra, ${nombre}! Te enviamos un email a ${email} con la información de tu compra.`);
    vaciarCarrito();
    document.getElementById("cliente-nombre").value = "";
    document.getElementById("cliente-email").value = "";
    document.getElementById("cliente-direccion").value = "";
  }
};

// Guardar el carrito en el almacenamiento
const guardarCarritoEnStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Funciones de búsqueda y filtrado
const buscarProducto = (nombre) => {
  return productos.find((producto) => producto.nombre === nombre);
};

const filtrarPorPrecio = (precioMinimo, precioMaximo) => {
  return productos.filter((producto) => producto.precio >= precioMinimo && producto.precio <= precioMaximo);
};

// Variables para recopilar la información del cliente
let nombre = '';
let apellido = '';
let correo = '';
let telefono = '';

// Función para recopilar la información del cliente
const recopilarInformacion = () => {
  // Recopilar la información del formulario HTML
  nombre = document.getElementById('nombre').value;
  apellido = document.getElementById('apellido').value;
  correo = document.getElementById('correo').value;
  telefono = document.getElementById('telefono').value;

  // Validar que se haya ingresado un valor para cada campo
  if (nombre === '' || apellido === '' || correo === '') {
    alert('Por favor ingrese todos los campos requeridos.');
    return false;
  }

  // Mostrar la información recopilada en la consola
  console.log('Información del cliente:');
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Correo:', correo);

  // Guardar la información del cliente en el almacenamiento
  const cliente = {
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono
  };
  localStorage.setItem("cliente", JSON.stringify(cliente));
};

// Cargar el carrito desde el almacenamiento al iniciar
document.addEventListener("DOMContentLoaded", async () => {
  await cargarCarritoDesdeStorage();
  actualizarCarrito();
});

// Código relacionado con frameworks (jQuery)
$(document).ready(function() {
  // Código utilizando jQuery
});

// Código relacionado con Node.js (requiere tener instalado Node.js)
const fs = require('fs');

// Código utilizando fs (sistema de archivos) de Node.js
fs.readFile('archivo.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

// Código relacionado con Ajax (usando jQuery)
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(response) {
    console.log(response);
  },
  error: function(error) {
    console.error(error);
  }
});

// Código relacionado con Fetch
fetch('https://api.example.com/data')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error(error);
  });


