import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Return";

export class cicloDo extends Instruction{

    constructor(
        public logic: Expression,
        public instruction: Array<Instruction>|null,
        public transfer: Type|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment) {
        let logica = this.logic.execute(env)
        const newEnv= new Environment(env)
        let aux;
        do{
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
        }while(logica.value)
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo: ""};
    }
}