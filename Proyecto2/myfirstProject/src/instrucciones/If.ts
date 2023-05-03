import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class If extends Instruccion {


    constructor(
        public condicion: string,
        public ListaIns: Array<Instruccion>,
        public ListaElif: string,
        public Ultimas: Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un if")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoIf = new nodo("<IF>");

        if (this.ListaElif==null && this.Ultimas==null){
            nodoIf.agregarHijo("<CONDICION>\n"+this.condicion);
            this.ListaIns.forEach(fir => {
                nodoIf.agregarHijo_nodo(fir.getNodo());
            });

        }

        if (this.ListaElif==null){
            nodoIf.agregarHijo("<CONDICION>\n"+ this.condicion);
            this.ListaIns.forEach(fir1 => {
                nodoIf.agregarHijo_nodo(fir1.getNodo());
            });
            this.Ultimas.forEach(fiur => {
                nodoIf.agregarHijo_nodo(fiur.getNodo());
            });
        }
        else{
            nodoIf.agregarHijo("<CONDICION>\n"+ this.condicion);
            this.ListaIns.forEach(feer => {
                nodoIf.agregarHijo_nodo(feer.getNodo());
            });
            nodoIf.agregarHijo(this.ListaElif);
            this.Ultimas.forEach(pru => {
                nodoIf.agregarHijo_nodo(pru.getNodo());
            });
        }
        return nodoIf;
    }
}