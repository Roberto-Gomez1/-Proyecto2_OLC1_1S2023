import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Return";
import { Statement } from "./Statement";

export class cicloWhile extends Instruction{
    constructor(private logic:Expression, private instruction: Array<Instruction>|null,public transfer: Type| null, line:number, column:number)
    {
        super(line, column);
    }

    public execute(env: Environment) {
        let logica = this.logic.execute(env)
        const newEnv = new Environment(env);
        let aux;
        while(logica.value){
            if(this.instruction!=null)
                for(const inst of this.instruction){
                    let t
                    if(inst!=null)t = inst.execute(newEnv)
                    if(t == Type.BREAK){
                        aux = Type.BREAK
                        break
                    }else if(t == Type.CONTINUE){
                        aux = Type.CONTINUE
                        continue
                    }
                }
            logica = this.logic.execute(env)
            if(this.transfer != null || aux!=null){
                if(this.transfer == Type.BREAK || aux == Type.BREAK){
                    break
                }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                    continue
                }
            }
        }
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo: ""};
    }

}