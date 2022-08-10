let input = document.getElementById("producto");
let inputPrecio = document.getElementById("precio");
let btnCarro = document.getElementById("carrito");
let produkto: string[] = [];
let precioProducto: number[] = [];
let btnDsc = document.getElementById("dsc");
let lista = document.getElementById("listaP");
let suma: number = 0;
let dscrespuesta = document.getElementById("dscrespuesta");

const agregarProducto = () => {
  precioProducto.push(Number(inputPrecio.value));
  produkto.push(input.value);
  lista?.innerHTML += `<li> ${input.value}  x $ ${inputPrecio.value}  </li>`;
  input.value = "";
  inputPrecio.value = "";
};
const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precioProducto.length; i++) {
    suma += Number(precioProducto[i]);
  }
  total?.innerHTML = suma;
};

const verDescuento = () => {
  if (suma < 2500) {
    dscrespuesta.value = "";
    dscrespuesta?.innerHTML += `<li> Su monto total es inferior a $2500 </li>`;
  } else {
    dscrespuesta.value = "";
    dscrespuesta?.innerHTML += `<li>¡Tiene un descuento de 10%!" </li>`;
  }
};

btnCarro?.addEventListener("click", agregarProducto);
btnCarro?.addEventListener("click", calcularTotal);
btnDsc?.addEventListener("click", verDescuento);
