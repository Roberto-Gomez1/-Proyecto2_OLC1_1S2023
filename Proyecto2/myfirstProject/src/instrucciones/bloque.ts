import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Bloque extends Instruccion {
    constructor(
        public listaInstrucciones:Array<Instruccion>,

        linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar():any {
       
        //const newEnv = new Env(myEnv);
    
        // for (const instruccion of this.listaInstrucciones) {
        //     try {
        //         instruccion.ejecutar(newEnv);
        //     } catch (error) {
        //         console.log(error);
                
        //     }
        // }
    
    }

    public getNodo() {
        var nodoWhile = new nodo("<ENCAPSULAMIENTO>");
        this.listaInstrucciones.forEach(idd => {
            nodoWhile.agregarHijo_nodo(idd.getNodo());
        });
        return nodoWhile;
    }
}