import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Ternario extends Expression {
  constructor(
    private condicion: Expression,
    private izquierdo: Expression,
    private derecho: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    const condicion = this.condicion.execute(env);
    if (condicion.value) {
        const op1= this.izquierdo.execute(env);
        return {value: op1.value, type: op1.type};
    } else {
        const op2= this.derecho.execute(env);
        return {value: op2.value, type: op2.type};
    }
    
}
   
   
  public drawAst(): { rama: string; nodo: string; } {
    return {rama:"", nodo:""};
  }
}
