import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Funcion extends Instruccion {


    constructor(
        public nombre: string,
        public parametros: string,
        public tipo: string,
        public ListaINst : Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré una funcion")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoFuncion = new nodo("<FUNCION>");
        if (this.parametros == null){
            nodoFuncion.agregarHijo(this.nombre);
            nodoFuncion.agregarHijo(this.tipo);
            this.ListaINst.forEach(lis => {
                nodoFuncion.agregarHijo_nodo(lis.getNodo());
            });
        }else{
            nodoFuncion.agregarHijo(this.nombre);
            nodoFuncion.agregarHijo(this.parametros);
            nodoFuncion.agregarHijo(this.tipo);
            this.ListaINst.forEach(list2 => {
                nodoFuncion.agregarHijo_nodo(list2.getNodo());
            });
        }
        
        return nodoFuncion;
    }
}