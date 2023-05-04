import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return, Type } from "../abstract/Return";

export class Case extends Instruction{
    constructor (private condicion : Expression, private instrucciones : Instruction[], private linea : number, private columna : number){
        super(linea, columna);
    }

    public execute(env: Environment){
        if(this.instrucciones != null){
            for(const i of this.instrucciones){
                i.execute(env);
            }
        }
    }
    public retornarExpresion(env: Environment,expresionre:any): Return{
        const condicion = this.condicion.execute(env);
            return{value: condicion.value, type: condicion.type};
    }
    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo:""};
    }

}