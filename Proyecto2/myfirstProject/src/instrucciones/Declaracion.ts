import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";


export class Declaracion extends Instruccion {


    constructor(
        public nombre: string[],
        public tipo: string,
        public contenido: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.nombre+ " contenido: " + this.contenido+ "  lo encontre en la linea "+this.line);
        //metodo para guardar la variable, tabla de simbolos
        //Env.guardar_variable(this.nombre, this.tipo);

        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);
    
    }

    public getNodo() {
        var nodoDec = new nodo("<DECLARACION>");
        nodoDec.agregarHijo(this.tipo);
        this.nombre.forEach(id => {
            nodoDec.agregarHijo(id);
        });
        nodoDec.agregarHijo(this.contenido);
        return nodoDec;
    }
}