const productos = [
     { nombre: 'Peluche de Pato amarillo',
        descripcion: 'Todos sus accesorios vendran por separado seran aleatorios',
     precio: 373.01,
     imagen: 'pato.jpg'
     },
    {
     nombre: 'Peluche de personaje animado',
     descripcion: 'Buena calidad de peluche, no hay devoluciones.',
     precio: 241.99 ,
     imagen: 'stich.jpeg'
     },
     {
     nombre: 'Peluches de Spy Family coleccion completa',
     descripcion: 'Todos los articulos de tamaño similar.',
    
     precio: 650.00,
     imagen: 'spyfamlilifamili.jpeg'
     },
     {
     nombre: 'Peluche gigante de cantante Teto',
     descripcion: 'Con disco dvd de canciones incluido.',
     precio: 235.67,
    imagen: 'toto.jpeg'
     }
];
const catalogo = document.getElementById('catalogo');
function crearTarjetaProducto(producto) {
const card = document.createElement('div');
card.className = 'producto-card';
const imagen = document.createElement('img');
imagen.src = producto.imagen;
imagen.alt = producto.nombre;
const titulo = document.createElement('h2');
titulo.textContent = producto.nombre;
const descripcion = document.createElement('p');
descripcion.textContent = producto.descripcion;
const precio = document.createElement('span');
precio.className = 'precio';
precio.textContent = `$${producto.precio.toFixed(2)}`;
const boton = document.createElement('button');
boton.className = 'btn-comprar';
boton.textContent = 'Comprar';
card.appendChild(imagen);
card.appendChild(titulo);
card.appendChild(descripcion);
card.appendChild(precio);

card.appendChild(boton);
return card;
}
function renderizarCatalogo() {
    productos.forEach(producto => {
    const tarjeta = crearTarjetaProducto(producto);
    catalogo.appendChild(tarjeta);
    });
    }
    window.onload = renderizarCatalogo;