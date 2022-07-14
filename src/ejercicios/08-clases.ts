class PersonaNormal {

    constructor(
        public nombre: string,
        public Direccion: string
    ){}
}

// Añadir o expander la clase con todas la propiedades o metodos que persona normal tiene. 
class Here extends PersonaNormal {
    constructor (
        public alterEgo:string,
        public edad?:number,
        public nombreReal?:string
    ) {
        super(nombreReal, 'New York, USA');
    }
}

const ironman = new Here('Elide', 45, 'Lider');
console.log(ironman);