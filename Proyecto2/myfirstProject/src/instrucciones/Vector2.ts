import { Instruccion } from "../abstractas/instruccion";
//import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Vector2 extends Instruccion {


    constructor(
        public tipo: string,
        public nombre:string,
        public valores1: string,
        public valores2:string,
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
        var nodoVector2 = new nodo("<VECTOR>");
        if(this.valores2==null){
            nodoVector2.agregarHijo(this.tipo);
        nodoVector2.agregarHijo(this.nombre);
        nodoVector2.agregarHijo("{");
        nodoVector2.agregarHijo(this.valores1);
        nodoVector2.agregarHijo("}");
        }else{
        nodoVector2.agregarHijo(this.tipo);
        nodoVector2.agregarHijo(this.nombre);
        nodoVector2.agregarHijo("{");
        nodoVector2.agregarHijo(this.valores1);
        nodoVector2.agregarHijo("}");
        nodoVector2.agregarHijo("{");
        nodoVector2.agregarHijo(this.valores2);
        nodoVector2.agregarHijo("}");
        }
        
        return nodoVector2;
    }
}