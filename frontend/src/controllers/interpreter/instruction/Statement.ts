import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";

export class Statement extends Instruction {
    constructor(private body:Array<Instruction>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment) {
        const newEnv = new Environment(env);

        for(const instrucciones of this.body){
            try{
                const ret = instrucciones.execute(newEnv);
                if (ret != null && ret != undefined) {
                    return ret;
                }
            }catch(e){
                console.log("Error al ejecutar instrucciones")
            }
        }
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"",nodo:''};
     }
}