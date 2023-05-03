import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TablaSuma, TablaResta } from "../utils/TablaDominante";
import { TipoAritmetica } from "../utils/TipoAritmetica";

export class Aritmetica extends Expression {
  constructor(
    private izquierdo: Expression,
    private derecho: Expression,
    private tipoOperacion: TipoAritmetica,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    if (this.tipoOperacion == TipoAritmetica.SUMA) {
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      const tipoDominante = TablaSuma[op1.type][op2.type];
      switch (tipoDominante) {
        case Type.INT:
          if (op1.type == Type.BOOLEAN) {
            op1.value = op1.value ? 1 : 0;
          }
          if (op2.type == Type.BOOLEAN) {
            op2.value = op2.value ? 1 : 0;
          }

          if (op1.type == Type.CHAR) {
            op1.value = op1.value.charCodeAt(0);
          }
          if (op2.type == Type.CHAR) {
            op2.value = op2.value.charCodeAt(0);
          }
          return { value: op1.value + op2.value, type: Type.INT };
      }
    } 
    else if(this.tipoOperacion == TipoAritmetica.RESTA){
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      const tipoDominante = TablaResta[op1.type][op2.type];
      switch (tipoDominante) {
        case Type.INT:
          if (op1.type == Type.BOOLEAN) {
            op1.value = op1.value ? 1 : 0;
          }
          if (op2.type == Type.BOOLEAN) {
            op2.value = op2.value ? 1 : 0;
          }
          if (op1.type == Type.CHAR) {
            op1.value = op1.value.charCodeAt(0);
          }
          if (op2.type == Type.CHAR) {
            op2.value = op2.value.charCodeAt(0);
          }
          return { value: op1.value - op2.value, type: Type.INT };
      }
    }
    else if(this.tipoOperacion == TipoAritmetica.MENOSUNARIO){
      const op2 = this.izquierdo.execute(env);
      if(op2.type == Type.INT){
        return { value: -op2.value, type: Type.INT };
      }
      else if(op2.type == Type.DOUBLE){
        return { value: -op2.value, type: Type.DOUBLE };
      }

    }
    return { value: null, type: Type.NULL };
  }

  public drawAst(): { rama: string; nodo: string; } {
    return {rama:"",nodo:""};
}
}