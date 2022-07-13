/*
    ===== Código de TypeScript =====
*/

// any ==> Cualquier tipo de dato
// let habilidades = [1, '2', true, '3'];


// let habilidades: (boolean | string | number)[] = ["Bash", "TypeScript", "JavaScript", "C#", 654, true];

let habilidades: string[] = ["Elide", "Zavala"]

interface Personaje { 
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: "Strinder",
    hp: 100,
    habilidades: ["Bash", "TypeScript", "JavaScript", "C#"]
}

personaje.puebloNatal = "Paletafds"

console.table(personaje);