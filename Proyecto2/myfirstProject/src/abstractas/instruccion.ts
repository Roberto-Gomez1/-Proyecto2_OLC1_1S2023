import nodo from "../Abstract/nodo";
import { Env } from "../symbols/env";

export abstract class Instruccion{
    //atributos
    constructor(public line: number, public column: number) {
        this.line = line;
        this.column = column;
    }
    
    public abstract ejecutar():any;
    public abstract getNodo():nodo;
}