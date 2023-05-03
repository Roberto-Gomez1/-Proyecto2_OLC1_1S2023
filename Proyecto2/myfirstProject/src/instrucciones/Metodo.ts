import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Metodo extends Instruccion {


    constructor(
        public nombre: string,
        public parametros: string,
        public ListaInstruc: Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un metodo")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoMetodo = new nodo("<METOODO>");
        if (this.parametros == null){
            nodoMetodo.agregarHijo(this.nombre);
            this.ListaInstruc.forEach(lis => {
                nodoMetodo.agregarHijo_nodo(lis.getNodo());
            });

        }else{
            nodoMetodo.agregarHijo(this.nombre);
            nodoMetodo.agregarHijo(this.parametros)
            this.ListaInstruc.forEach(lis1 => {
                nodoMetodo.agregarHijo_nodo(lis1.getNodo());
            });
        }
        
        return nodoMetodo;
    }
}