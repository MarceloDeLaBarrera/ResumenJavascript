const productos = [
  {
    producto: "Hamburgesa",
    costo: 20,
  },
  {
    producto: "Papas fritas",
    costo: 8,
  },
  {
    producto: "Helado",
    costo: 3,
  },
  {
    producto: "Refresco",
    costo: 6,
  },
];

const mostrarMenu = () => {
  productos.forEach((producto) =>
    console.log(`Producto: ${producto.producto} | Precio: $${producto.costo}`)
  );
};

/*
for (let producto of productos) {
  console.log(`Producto: ${producto.producto} | Precio: $${producto.costo}`);
}

for (let i=0; i< productos.length; i++){
    console.log(`Producto: ${productos[i].producto} | Precio: $${productos[i].costo}`);
}
*/

const usuario = {
  nombre: "Marcelo",
  edad: 29,
  deuda: 0,
};

let pedido = [];
const verPedido = () => pedido;

const pedirProducto = (nombre) => {
  if (!nombre) {
    return "Ingrese un nombre valido";
  }
  const productoEncontrado = productos.find(
    (producto) => producto.producto.toLowerCase() === nombre.toLowerCase()
  );
  if (!productoEncontrado) {
    return "El producto no existe";
  } else {
    pedido.push(productoEncontrado);
    console.log("Su pedido es: ");
    return verPedido();
  }
};

let costoTotal = 0;

const calcularCosto = () => {
  let costo = 0;
  pedido.forEach((producto) => {
    costo += producto.costo;
  });
  costoTotal = costo;
  return costoTotal;
};

/*
const calcularCosto = () =>{
    let costo= 0
    for (let producto of pedido){
        costo += producto.costo
    }
    costoTotal= costo
    return costoTotal
} 
*/

const finalizarPedido = () => {
  calcularCosto();
  usuario.deuda = costoTotal;
  pedido = [];
  costoTotal = 0;
  return `${usuario.nombre}, tu dedes pagar ${usuario.deuda}`;
};

const pagarDeuda = (monto) => {
  let vuelto = 0;
  if (monto > usuario.deuda) {
    vuelto = monto - usuario.deuda;
    usuario.deuda = 0;
    return vuelto;
  } else if (monto < usuario.deuda) {
    vuelto = "Monto insuficiente";
    return vuelto;
  } else {
    vuelto = 0;
    usuario.deuda = 0;
    return vuelto;
  }
};
