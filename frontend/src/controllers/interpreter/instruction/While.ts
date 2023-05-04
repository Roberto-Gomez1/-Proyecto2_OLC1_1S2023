import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Return";

export class While extends Instruction{
    constructor(private condition:Expression, private code: Instruction, line:number, column:number)
    {
        super(line, column);
    }

    public execute(env: Environment) {
        this.code.execute(env);
        let contador = 0;
        while(true){
            const condicion = this.condition.execute(env);
            if(condicion !=null && condicion != undefined){
                if(!condicion.value){
                    break;
                }
            }
            if(contador > 1000){
                console.log("Error: Ciclo infinito");
                break;
            }
            const element = this.code.execute(env);
            /*if(element.type == Type.RETURN){
                return element;
            }else if(element.type == Type.BREAK){
                break;
            }else if(element.type == Type.CONTINUE){
                continue;
            }*/
        }
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo: ""};
    }

}