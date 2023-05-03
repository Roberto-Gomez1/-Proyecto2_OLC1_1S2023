import { Instruccion } from "../abstractas/instruccion";
import nodo from "../Abstract/nodo";

class Ciclo extends Instruccion {
    constructor(linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar():any {
        console.log("Encontre un ciclo");
        
    }

    public getNodo() {
        var nodoAsig = new nodo("<OPERADORTERNARIO>");
        //nodoDec.agregarHijo(this.tipo);
        // this.nombre.forEach(id => {
        //     nodoAsig.agregarHijo(id);
        // });
        // nodoAsig.agregarHijo(this.contenido);
        return nodoAsig;
    }
}