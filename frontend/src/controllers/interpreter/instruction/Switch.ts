import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Return";
import { Case } from "./Case";

export class Switch extends Instruction{
    constructor(private condicion : Expression, private cases : Case[], private defaultt: Instruction | null, private linea : number, private columna : number){
        super(linea, columna);
    }

    public execute(env: Environment) {
        const condicion = this.condicion.execute(env); 
        let encontrado = false;
        for (const c of this.cases) {
            const retorno = c.retornarExpresion(env, condicion.value);
            if (condicion.value == retorno.value) {
                c.execute(env);
                encontrado = true;
                break;
            }else{
                if(this.defaultt!=null){
                    this.defaultt.execute(env);
                    break;
                }
            }
        }
    }
    
    
    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo:""};
    }



}