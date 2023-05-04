import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return, Type } from "../abstract/Return";

export class Nativas extends Instruction {
    constructor(
      public valor: Expression,  
      public type: FunctionOptions,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public execute(env: Environment):Return{
        const exp = this.valor.execute(env)

        if(this.type == FunctionOptions.LOWER){
            if(exp.type == Type.STRING){
                return { value: exp.value.toLowerCase(), type: Type.STRING}
            }
        }else if(this.type == FunctionOptions.UPPER){
            if(exp.type == Type.STRING){
                return { value: exp.value.toUpperCase(), type: Type.STRING}
            }
        }else if(this.type == FunctionOptions.ROUND){
            if(exp.type == Type.DOUBLE){
                return { value: Math.round(exp.value), type: Type.DOUBLE}
            }
        }else if(this.type == FunctionOptions.LENGTH){
            let arr:any = Array.from(exp.value)
            return { value: arr.length, type: Type.INT}
        }else if(this.type == FunctionOptions.TYPEOF){
            if(exp.type == Type.INT){
                return { value: "int", type: Type.STRING}
            }else if(exp.type == Type.DOUBLE){
                return { value: "double", type: Type.STRING}
            }else if(exp.type == Type.BOOLEAN){
                return { value: "boolean", type: Type.STRING}
            }else if(exp.type == Type.CHAR){
                return { value: "char", type: Type.STRING}
            }else if(exp.type == Type.STRING){
                return { value: "string", type: Type.STRING}
            }
        }else if(this.type == FunctionOptions.TOSTRING){
            return { value: exp.value.toString(), type: Type.STRING}
        }else if(this.type == FunctionOptions.TOCHAR){
            if(exp.type == Type.STRING){
                let valor = exp.value.split('')
                return {value: valor, type: Type.CHAR}
            }
        }

        return { value: null, type: Type.NULL }
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo: ""};
    }
}
    export enum FunctionOptions{
        LOWER,
        UPPER,
        ROUND,
        LENGTH,
        TYPEOF,
        TOSTRING,
        TOCHAR
  }