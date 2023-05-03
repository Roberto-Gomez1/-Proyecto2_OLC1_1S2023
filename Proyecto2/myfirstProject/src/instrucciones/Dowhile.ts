import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class DoWhile extends Instruccion {


    constructor(
        public ListaInst: Array<Instruccion>,
        public condicion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un do while")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoDowhile = new nodo("<DOWHILE>");
        nodoDowhile.agregarHijo("do");
        nodoDowhile.agregarHijo("{");
        //nodoDoUntil.agregarHijo("<CONDICION>\n" + this.condicion);
        this.ListaInst.forEach(dount => {
            nodoDowhile.agregarHijo_nodo(dount.getNodo());
        });
        nodoDowhile.agregarHijo("}");
        nodoDowhile.agregarHijo("while");
        nodoDowhile.agregarHijo("<CONDICION>\n" + this.condicion);
        return nodoDowhile;
    }
}