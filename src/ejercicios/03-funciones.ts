/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b:number): number {
    return a + b; 
}

const sumarFlecha = (a: number, b: number):number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}

interface PersonajeL0R {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeL0R, curarX: number ): void {
    personaje.pv += curarX;

    console.log( personaje )
}

const nuevoPersonaje: PersonajeL0R = {
    nombre: "Strinder",
    pv: 50,
    mostrarHp() {
        console.log('Puntos de videa:', this.pv);
    }
}

console.log(curar( nuevoPersonaje, 20))

nuevoPersonaje.mostrarHp();



