import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";
export class AccesoVector extends Instruccion {


    constructor(
        public tipo: string,
        public nombre: string,
        public nombre2: string,
        public numero: string,
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
        var nodoAcceso = new nodo("<ACCESOVECTOR>");
        if (this.numero2==null){
            nodoAcceso.agregarHijo(this.tipo);
            nodoAcceso.agregarHijo(this.nombre);
            nodoAcceso.agregarHijo(this.nombre2);
            nodoAcceso.agregarHijo("[");
            nodoAcceso.agregarHijo(this.numero);
            nodoAcceso.agregarHijo("]");
        }else{
            nodoAcceso.agregarHijo(this.tipo);
            nodoAcceso.agregarHijo(this.nombre);
            nodoAcceso.agregarHijo(this.nombre2);
            nodoAcceso.agregarHijo("[");
            nodoAcceso.agregarHijo(this.numero);
            nodoAcceso.agregarHijo("]");
            nodoAcceso.agregarHijo("[");
            nodoAcceso.agregarHijo(this.numero2);
            nodoAcceso.agregarHijo("]");
        }
        return nodoAcceso;
    }

}