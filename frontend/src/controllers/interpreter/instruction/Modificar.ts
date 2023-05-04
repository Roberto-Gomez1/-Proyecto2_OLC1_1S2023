import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";

export class Modificar extends Instruction{
    private id: string;
    private valor: any;

    constructor(id: string, valor: Expression, line: number, column: number){
        super(line, column);
        this.id = id;
        this.valor = valor;
    }

    public execute(env: Environment): any{
        if (this.valor != null) {
            const val = this.valor.execute(env);
            env.modificar(this.id, val.value);
        } else {
        env.modificar(this.id, null);
        }  
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo:""};
      }

}