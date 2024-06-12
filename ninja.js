// Crea una clase Ninja
class Ninja {
    // Agregar atributos: nombre, salud, velocidad: valor predeterminado 3, fuerza: valor predeterminado de 3
    constructor(nombre, salud = 100) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    // Agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
    sayName() {
        console.log("Nombre:", this.nombre);
    }
    
    // Agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja
    drinkSake() {
        this.salud += 10;
    }

    // Agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja
    showStats() {
        console.log("Nombre:", this.nombre);
        console.log("Fuerza:", this.fuerza);
        console.log("Velocidad:", this.velocidad);
        console.log("Salud:", this.salud);
    }
}

// Extiende la clase Ninja y crea la clase Sensei
class Sensei extends Ninja {
    constructor(nombre) {
        // Llama al constructor de la clase Ninja con los parámetros necesarios
        super(nombre, 200);
        this.velocidad = 10;  // Ajusta la velocidad por defecto a 10
        this.fuerza = 10;     // Ajusta la fuerza por defecto a 10
        this.sabiduria = 10;  // Agrega el nuevo atributo sabiduría con el valor predeterminado de 10
    }

    // Método speakWisdom() - Llama al método drinkSake() desde la clase Ninja y registra un mensaje de sabiduría
    speakWisdom() {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// Ejemplos de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(); // Imprime el mensaje de sabiduría y aumenta la salud en 10
superSensei.showStats();   // Muestra las estadísticas actualizadas del Sensei

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
