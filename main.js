let carrito = [];
let total = 0;

const productos = [
  { nombre: 'Nike Air Max SYSTM GRIS', precio: 200 },
  { nombre: 'Nike Air Max 2021', precio: 400 },
  { nombre: 'Air Jordan 1 Mid SE', precio: 350 },
 

];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoLista = document.getElementById('carrito-lista');
  carritoLista.innerHTML = '';
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoLista.appendChild(li);
  });
  document.getElementById('carrito-total').textContent = `Total: $${total}`;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function realizarCompra() {
  if (carrito.length > 0) {
    alert(`Compra realizada por un total de $${total}`);
    vaciarCarrito();
  } else {
    alert('No hay productos en el carrito');
  }
}

function simularCompra() {
  let continuar = true;
  while (continuar) {
    const seleccion = prompt(`¿Qué producto deseas comprar? (1-${productos.length})\n\n${productos.map((p, i) => `${i+1}. ${p.nombre} - $${p.precio}`).join('\n')}\n\nEscribe "cancelar" para salir`);
    if (seleccion === 'cancelar') {
      alert('Compra cancelada');
      continuar = false;
    } else {
      const seleccionNum = parseInt(seleccion);
      if (!isNaN(seleccionNum) && seleccionNum > 0 && seleccionNum <= productos.length) {
        const producto = productos[seleccionNum-1];
        agregarAlCarrito(producto.nombre, producto.precio);
        const continuarCompra = confirm(`¿Quieres seguir comprando?\n\nTotal de la compra: $${total}`);
        if (!continuarCompra) {
          realizarCompra();
          continuar = false;
        }
      } else {
        alert('Selección inválida');
      }
    }
  }
}