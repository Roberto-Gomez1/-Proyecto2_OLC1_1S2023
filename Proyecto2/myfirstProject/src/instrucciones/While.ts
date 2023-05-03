import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class WhileG extends Instruccion {


    constructor(
        public condicion: string,
        public ListaInstruc: Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un ciclo while")
        //metodo para guardar la variable, tabla de simbolos
    }

    public getNodo() {
        var nodoWhile = new nodo("<WHILE>");
        nodoWhile.agregarHijo("<CONDICION>\n" + this.condicion);
        this.ListaInstruc.forEach(idd => {
            nodoWhile.agregarHijo_nodo(idd.getNodo());
        });
        return nodoWhile;
    }
}
