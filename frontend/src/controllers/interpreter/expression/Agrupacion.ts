import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoLogico } from "../utils/TipoLogico";

export class Agrupacion extends Expression {
  constructor(
    private expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    const op1 = this.expresion.execute(env);
    return { value: op1.value, type: op1.type };
}
   
   
  public drawAst(): { rama: string; nodo: string; } {
    return {rama:"", nodo:""};
  }
}
