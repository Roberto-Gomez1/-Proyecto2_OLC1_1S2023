import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Incremento extends Instruccion {


    constructor(
        public nombre: string,
        public contenido: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un incremento, nombre:" +this.nombre)
    
    }

    public getNodo() {
        var nodoInc = new nodo("<INCREMENTO>");
        nodoInc.agregarHijo(this.nombre);
        nodoInc.agregarHijo(this.contenido);
        return nodoInc;
    }
}