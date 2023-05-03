import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class For extends Instruccion {


    constructor(
        public primeracondicion: string,
        public segundacondicion: string,
        public terceracondicion: string,
        public ListaInst: Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un for")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoFor = new nodo("<FOR>");
        nodoFor.agregarHijo("<PRIMERA>\n" + this.primeracondicion);
        nodoFor.agregarHijo("<SEGUNDA>\n" + this.segundacondicion);
        nodoFor.agregarHijo("<TERCERA>\n" + this.terceracondicion);
        //nodoDoUntil.agregarHijo("<CONDICION>\n" + this.condicion);
        this.ListaInst.forEach(dount => {
            nodoFor.agregarHijo_nodo(dount.getNodo());
        });
        return nodoFor;
    }
}