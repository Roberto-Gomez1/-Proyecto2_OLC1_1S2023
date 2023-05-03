import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";


export class LlamadaFuncion extends Expression {
    constructor(private id:string, private argumentos:Array<Expression>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment):any {
        const funcion = env.getFuncion(this.id);
        if (funcion != null) {
            const envFun = new Environment(env.getGlobal());
            if (funcion.parametros.length == this.argumentos.length) {
              for (let i = 0; i < funcion.parametros.length; i++) {
                const valor = this.argumentos[i].execute(env);
                const param = funcion.parametros[i].execute(env);
                if (valor.type == param.type) {
                  envFun.guardar(param.value, valor.value, valor.type, this.line, this.column);
                } else {
                  console.log("Error, El parametro " + param.value + " no es del tipo " + param.type + ", linea " + this.line + " y columna " + this.column);
                }
              }
              funcion.statement.execute(envFun);
            } else {
              console.log("Error, La funcion " + this.id + " no tiene la cantidad de parametros correcta, linea " + this.line + " y columna " + this.column);
            }
      
          } else {
            console.log("Error, La funcion " + this.id + " no existe, linea " + this.line + " y columna " + this.column);
          }
    }
    
    public drawAst(): { rama: string; nodo: string; } {
      return {rama:"",nodo:""};
  }
}