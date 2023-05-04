import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";

export class Casteo extends Expression{

    constructor(private tipo: Type,private expresion: Expression,  line: number, column: number){
        super(line, column);
    }

    public execute(env: Environment): Return{
        const op = this.expresion.execute(env);
        switch (op.type){
            case Type.INT:
                if( this.tipo == Type.DOUBLE){
                    return {value: parseFloat(op.value), type: Type.DOUBLE};
                }
                else if(this.tipo == Type.STRING){
                    return {value: op.value.toString(), type: Type.STRING};
                }
                else if(this.tipo == Type.CHAR){
                    return {value: String.fromCharCode(op.value), type: Type.CHAR};
                }
            case Type.DOUBLE:
                if (this.tipo == Type.INT){
                    return {value: parseInt(op.value), type: Type.INT};
                }
                else if(this.tipo == Type.STRING){
                    return {value: op.value.toString(), type: Type.STRING};
                }
            case Type.CHAR:
                if( this.tipo == Type.INT){
                    return {value: op.value.charCodeAt(0), type: Type.INT};
                }
                else if(this.tipo == Type.DOUBLE){
                    return {value: parseFloat(op.value.charCodeAt(0)), type: Type.DOUBLE};
                }
            default:
                return {value: null, type: Type.NULL};
        }
        
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo:""};
    }
}