import { calculaISV, Producto } from './06-desestructuracion-funcion'

/*
    ===== Código de TypeScript =====
*/


// Sera un arreglo de producto que contenga un objeto con dos propiedades
const carritoCompras: Producto[] = [
    {
        desc: 'Nokia A1',
        precio: 150
    },
    {
        desc: 'iPad Air',
        precio: 110
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log( 'Total:', total );
console.log( 'ISV:', isv );