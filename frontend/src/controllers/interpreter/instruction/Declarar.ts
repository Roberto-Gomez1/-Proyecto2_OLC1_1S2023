import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";


export class Declarar extends Instruction {
  private id: string;
  private tipo: Type;
  private valor: Expression | null;

  constructor(id: string, tipo: Type, valor: Expression | null, line:number, column:number) {
    super(line, column);
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
    
  }

  public execute(env: Environment): any {
    if (this.valor != null) {
      const val = this.valor.execute(env);
      env.guardar(this.id, val.value, this.tipo, this.line, this.column);
    } else {
      env.guardar(this.id, null, this.tipo, this.line, this.column);
    }
  }

  public drawAst(): { rama: string; nodo: string; } {
    const id = Math.floor(Math.random() * (100 - 0) + 0);
    const nodoPrincipal = `nodoDeclarar${id.toString()}`;
    const nodoIdPrincipal = `nodoId${id.toString()}`;
    if (this.valor != null) {
      const codigoAST:{rama:string, nodo:string} = this.valor.drawAst();
      let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n `;
      ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
      ramaDeclarar += codigoAST.rama+ "\n";
      ramaDeclarar += `${nodoPrincipal} -> ${nodoIdPrincipal};\n`;
      ramaDeclarar += `${nodoIdPrincipal} -> ${codigoAST.nodo};\n`;
      return { rama: ramaDeclarar, nodo: nodoPrincipal };

    }else {
      let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n `;
      ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
      ramaDeclarar += `${nodoPrincipal} -> ${nodoIdPrincipal};\n`;
      return { rama: ramaDeclarar, nodo: nodoPrincipal };
    }
  }


}