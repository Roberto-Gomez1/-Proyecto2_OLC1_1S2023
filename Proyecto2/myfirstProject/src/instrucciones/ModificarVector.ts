import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";
export class ModificarVector extends Instruccion {


    constructor(
        public nombre: string,
        public numero: string,
        public cadena: string,
        public numero2: string,
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
        var nodoModificar = new nodo("<MODIFICARVECTOR>");
        if (this.numero2==null){
            nodoModificar.agregarHijo(this.nombre);
            nodoModificar.agregarHijo('[');
            nodoModificar.agregarHijo(this.numero);
            nodoModificar.agregarHijo(']');
            nodoModificar.agregarHijo(this.cadena);

        }else{
            nodoModificar.agregarHijo(this.nombre);
            nodoModificar.agregarHijo('[');
            nodoModificar.agregarHijo(this.numero);
            nodoModificar.agregarHijo(']');
            nodoModificar.agregarHijo(this.cadena);
            nodoModificar.agregarHijo(this.numero2);
        }
        return nodoModificar;
    }

}