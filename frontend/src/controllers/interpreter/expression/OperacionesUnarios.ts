import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoAritmetica } from "../utils/TipoAritmetica";

export class OperacionesUnarios extends Expression {
  constructor(
    private id: string,
    private tipoOperacion: TipoAritmetica,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    if (this.tipoOperacion == TipoAritmetica.INCREMENTO) {
      const valor = env.getVar(this.id);
      if (valor) {
        if (valor.type == Type.INT) {
          valor.valor = valor.valor + 1;
          env.modificar(this.id, valor.valor);
          return { value: valor.valor, type: Type.INT };
        }
      }

    }
    else if (this.tipoOperacion == TipoAritmetica.DECREMENTO) {
      const valor = env.getVar(this.id);
      if (valor) {
        if (valor.type == Type.INT) {
          valor.valor = valor.valor - 1;
          env.modificar(this.id, valor.valor);
          return { value: valor.valor, type: Type.INT };
        }
      }
    }
    

    return { value: null, type: Type.NULL };
  }


  public drawAst(): {rama:string, nodo:string} {
    return {rama:"", nodo: ""};
  }
}
