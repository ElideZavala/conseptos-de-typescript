/*
    ===== Código de TypeScript =====
*/
/* <T> ==> Significa Generico es Estadar aun que puede cambiar la Letra  */ 

// Puedo recibir algo de tipo <T> y cambiara el tipo de elemento que recibe. 
function queTipoSoy<T>(argumento: T): string {
    return [argumento].toString();
}

let SoyString = queTipoSoy("Soy un string"); // <T> Devuelve un string
let soyNumero = queTipoSoy(100);             // <T> Devuelve un number
let soyBooleano = queTipoSoy(true);          // <T> Devuelve un boolean
let soyrAray = queTipoSoy([1, 2, 3]);        // <T> Devuelve un array

// Hacer un Explicito
let soyExplicito = queTipoSoy<number>(125);