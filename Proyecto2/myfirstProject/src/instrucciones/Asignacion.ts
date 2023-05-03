import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";
export class Asignacion extends Instruccion {


    constructor(
        public nombre: string[],
        public contenido: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        console.log("Encontre una asignacion, nombre:"+this.nombre +" , contenido:  " + this.contenido + " lo encontre en la linea "+this.line);
    }

    public getNodo() {
        var nodoAsig = new nodo("<ASIGNACION>");
        this.nombre.forEach(id => {
            nodoAsig.agregarHijo(id);
        });
        nodoAsig.agregarHijo(this.contenido);
        return nodoAsig;
    }
}