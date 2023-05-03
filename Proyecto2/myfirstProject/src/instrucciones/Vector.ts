import { Instruccion } from "../abstractas/instruccion";
//import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Vector extends Instruccion {


    constructor(
        public tipo: string,
        public nombre:string,
        public tipo2: string,
        public contenido:string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un vector")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoVector = new nodo("<VECTOR>");
        nodoVector.agregarHijo(this.tipo);
        nodoVector.agregarHijo(this.nombre);
        nodoVector.agregarHijo(this.tipo2);
        nodoVector.agregarHijo("[");
        nodoVector.agregarHijo(this.contenido);
        nodoVector.agregarHijo("]");
        return nodoVector;
    }
}