import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class Elif extends Instruccion {


    constructor(
        public condicion: string,
        public ListaInst: Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un elif")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoELIF = new nodo("<ELIF>");
        nodoELIF.agregarHijo("<CONDICION>\n" + this.condicion);
        this.ListaInst.forEach(elff => {
            nodoELIF.agregarHijo_nodo(elff.getNodo());
        });
        return nodoELIF;
    }
}