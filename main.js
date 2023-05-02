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

// Funciones para manejar el carrito de compras
function agregarAlCarrito(nombre, precio) {
  const producto = {
    nombre: nombre,
    precio: precio,
  };
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
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
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function realizarCompra() {
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
}

// Funciones de búsqueda y filtrado
function buscarProducto(nombre) {
  return productos.find((producto) => producto.nombre === nombre);
}

function filtrarPorPrecio(precioMinimo, precioMaximo) {
  return productos.filter((producto) => producto.precio >= precioMinimo && producto.precio <= precioMaximo);
}
// Variables para recopilar la información del cliente
let nombre = '';
let apellido = '';
let correo = '';
let telefono = '';

// Función para recopilar la información del cliente
function recopilarInformacion() {
  // Recopilar la información del formulario HTML
  nombre = document.getElementById('nombre').value;
  apellido = document.getElementById('apellido').value;
  correo = document.getElementById('correo').value;
  telefono = document.getElementById('telefono').value;

  // Validar que se haya ingresado un valor para cada campo
  if (nombre === '' || apellido === '' || correo === '' ) {
    alert('Por favor ingrese todos los campos requeridos.');
    return false;
  }

  // Mostrar la información recopilada en la consola
  console.log('Información del cliente:');
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Correo:', correo);
}