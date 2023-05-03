import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class LCase extends Instruccion {


    constructor(
        public nombre: string,
        public instrucciones: string[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre un lower, nombre:"+this.nombre +" , contenido:  " + this.contenido + " lo encontre en la linea "+this.line);
        console.log("Encontre un Case");
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoLCase = new nodo("<CASE>");
        nodoLCase.agregarHijo(this.nombre);
        //nodoPrint.agregarHijo(this.tipo);
        this.instrucciones.forEach(id => {
            nodoLCase.agregarHijo(id);
        });
        return nodoLCase;
    }
}