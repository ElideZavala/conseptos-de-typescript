/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new peoperty";
        hello = "override";
    }
}
@classDecorator

// Un decorardor no es mas que una funcion
// Lo decoradores sirven para expandir o añadir funcionalidades especiales. 
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo')
    }
}

console.log( MiSuperClase )

const miClase = new MiSuperClase();
