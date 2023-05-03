import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";
export class Casteo extends Instruccion {


    constructor(
        public tipo: string,
        public nombre: string,        
        public convertir: string,
        public dato: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre un casteo, tipo:"+this.tipo+ " nombre: " + this.nombre + " a tipo: " + this.convertir + " dato: " + this.dato);
        //console.log("Encontré un casteo")
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoCasteo = new nodo("<CASTEO>");
        //nodoDec.agregarHijo(this.tipo);
        // this.nombre.forEach(id => {
        //     nodoDec.agregarHijo(id);
        // });
        nodoCasteo.agregarHijo(this.tipo);
        nodoCasteo.agregarHijo(this.nombre);
        nodoCasteo.agregarHijo("=");
        nodoCasteo.agregarHijo(this.convertir);
        nodoCasteo.agregarHijo(this.dato);
        return nodoCasteo;
    }


}