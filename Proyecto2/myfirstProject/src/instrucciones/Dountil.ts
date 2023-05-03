import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class DoUntil extends Instruccion {


    constructor(
        
        public ListaInst: Array<Instruccion>,
        public condicion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un do until")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoDoUntil = new nodo("<DOUNTIL>");
        //var nodoPrueba = new nodo("LISTA");
        nodoDoUntil.agregarHijo("do");
        nodoDoUntil.agregarHijo("{");
        //nodoDoUntil.agregarHijo("<CONDICION>\n" + this.condicion);
        this.ListaInst.forEach(dount => {
            nodoDoUntil.agregarHijo_nodo(dount.getNodo());
        });
        nodoDoUntil.agregarHijo("}");
        nodoDoUntil.agregarHijo("until");
        nodoDoUntil.agregarHijo("<CONDICION>\n" + this.condicion);
        return nodoDoUntil;
    }
    
}