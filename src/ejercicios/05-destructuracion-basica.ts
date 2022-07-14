/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
 }

 // Facil de leer
//  const { volumen: vol, segundo, cancion, detalles } = reproductor;
//  const { autor, anio } = detalles;  // 1)==>Opcion 1

//  console.log('El volumen actual de: ', vol );
//  console.log('El segundo actual de: ', segundo );
//  console.log('El cancion actual de: ', cancion );
//  console.log('El actor actual de: ', autor)
//  console.log('El anio actual de: ', anio)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , tercero] = dbz;

// console.log('Personaje 1:', primero);
// console.log('Personaje 1:', segundo);
console.log('Personaje 1:', tercero);  // Solo necesito la tercera posicion.