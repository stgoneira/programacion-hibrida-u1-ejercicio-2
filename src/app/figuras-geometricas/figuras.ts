export abstract class FiguraGeometrica {
    nombre: string = ""

    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract calcularArea(): number 
}

export class Circulo extends FiguraGeometrica {
    radio: number 

    constructor(nombre: string, radio:number) {
        super(nombre)
        this.radio = radio 
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2 
    }
}

export class Rectangulo extends FiguraGeometrica {
    base:number 
    altura:number 

    constructor(nombre:string, base:number, altura:number) {
        super(nombre)
        this.base = base 
        this.altura = altura 
    }

    calcularArea(): number {
        return this.base * this.altura 
    }
}