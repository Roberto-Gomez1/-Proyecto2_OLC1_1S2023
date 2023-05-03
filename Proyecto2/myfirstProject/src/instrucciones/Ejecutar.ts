import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Ejecutar extends Instruccion {


    constructor(
        public nombre: string,
        public contenido: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        //console.log("Encontré un ejecutar")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoEject = new nodo("<EJECUTAR>");
        nodoEject.agregarHijo(this.nombre);
        if (this.contenido == null){
            nodoEject.agregarHijo("(");
            nodoEject.agregarHijo(")");
        }else{
            nodoEject.agregarHijo("(");
        nodoEject.agregarHijo(this.contenido);
        nodoEject.agregarHijo(")");
        }
        return nodoEject;
    }
}