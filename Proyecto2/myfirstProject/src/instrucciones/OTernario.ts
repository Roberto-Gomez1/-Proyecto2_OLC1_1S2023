import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";
export class OTernario extends Instruccion {


    constructor(
        public nombre: string,
        public nombre2: string,
        public siguiente: string,
        public izquierda: string,
        public derecha: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un operador ternario")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoOperT = new nodo("<OPERADORTERNARIO>");
        nodoOperT.agregarHijo(this.nombre);
        nodoOperT.agregarHijo(this.nombre2);
        nodoOperT.agregarHijo(this.siguiente);
        nodoOperT.agregarHijo("?");
        nodoOperT.agregarHijo(this.izquierda);
        nodoOperT.agregarHijo(":");
        nodoOperT.agregarHijo(this.derecha);
        return nodoOperT;
    }

}