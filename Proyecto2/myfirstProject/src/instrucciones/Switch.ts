import { Instruccion } from "../abstractas/instruccion";
import { Env } from "../symbols/env";
import nodo from "../Abstract/nodo";

export class SwitchG extends Instruccion {


    constructor(
        public expresion: string,
        public lista: string[],
        //public instruccion: string[],
        //public listaInstrucciones:Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        //console.log("Encontre una asignacion, nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        console.log("Encontré un switch")
        //metodo para guardar la variable, tabla de simbolos

        // for (const instruccion of this.listaInstrucciones) {
        //     try {
        //         instruccion.ejecutar();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        //Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        var nodoSwitch = new nodo("<SWITCH>");
        //nodoSwitch.agregarHijo(this.nombre);
        nodoSwitch.agregarHijo("(");
        nodoSwitch.agregarHijo(this.expresion);
        nodoSwitch.agregarHijo(")");
        //nodoSwitch.agregarHijo(this.lista);
        //nodoSwitch.agregarHijo(this.listaInstrucciones);
        // for (const instruccion of this.listaInstrucciones) {
        //     try {
        //         //instruccion.ejecutar(Env);
        //         nodoSwitch.agregarHijo(instruccion.ejecutar(Env));
        //     } catch (error) {
        //         console.log(error);
                
        //     }
        // }
        this.lista.forEach(id => {
            nodoSwitch.agregarHijo(id);
        }
        );

        // this.instruccion.forEach(id => {
        //     nodoSwitch.agregarHijo(id);
        // }
        // );
        //nodoSwitch.agregarHijo(this.instruccion);
        //nodoSwitch.agregarHijo("=");
        //nodoSwitch.agregarHijo(this.contenido);
        return nodoSwitch;
}
}