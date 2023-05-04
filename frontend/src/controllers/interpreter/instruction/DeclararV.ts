import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction"
import { Type } from "../abstract/Return";

export class DeclaracionV extends Instruction{
    constructor(public id: string,
        public type: Type,
        public expression1:Expression|null,
        public expression2:Expression|null,
        public list:any [] | null,
        public fun: Expression | null,
        public sw:number,
        line: number,
        column: number
      ) {
        super(line, column);
      }
      public execute(env: Environment) {
        let exp1 = this.expression1?.execute(env)
        let exp2 = this.expression2?.execute(env)

        if(exp1 != null && exp2 == null && this.list == null){
            if(exp1.type == Type.INT){
                let valueA: any[] = [];
                if(this.type == Type.INT){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push(0)
                    }
                }else if(this.type == Type.DOUBLE){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push(0.0)
                    }
                }else if(this.type == Type.BOOLEAN){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push(true)
                    }
                }else if(this.type == Type.CHAR){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push('0')
                    }
                }else if(this.type == Type.STRING){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push("")
                    }
                }else{
                    //s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                }
                const aux = env.saveVar(this.id,valueA,this.type,null,null)
            }else{
                //s.addError(new Errores("Semantico","Tipo de dato incompatible, para los indices del vector",this.line,this.column))
            }
        }else if(exp1 != null && exp2 !=null && this.list == null){
            if(exp1.type == Type.INT && exp2.type == Type.INT){
                let valueA: any[] = [];
                let valueB: any [] = [];
                if(this.type == Type.INT){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push(0)
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.DOUBLE){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push(0.0)
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.BOOLEAN){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push(true)
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.CHAR){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push('0')
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.STRING){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push("")
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else{
                    //s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                }
                const aux = env.saveVar(this.id,valueA,this.type,null,null)
            }else{
                //s.addError(new Errores("Semantico","Tipo de dato incompatible, para los indices del vector",this.line,this.column))
            }
        }else if(exp1 == null && exp2 == null && this.list != null){
            if(this.sw == 0){
                //vector
                for(let i = 0; i<this.list.length;i++){
                    this.list[i]=this.list[i].run()
                }
                let aux:boolean = false;
                for(let i = 0; i<this.list.length;i++){
                    if(this.list[i].type == this.type){
                        aux = true
                        this.list[i] = this.list[i].value
                    }else aux = false;

                    if(!aux){
                        //s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                        break
                    }
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type,null,null)
                }
            }else if(this.sw == 1){
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        this.list[i][j]=this.list[i][j].run()
                    }
                }
                let aux:boolean = false;
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        if(this.list[i][j].type == this.type){
                            aux = true
                            this.list[i][j] = this.list[i][j].value
                        }else aux = false;

                        if(!aux){
                            //s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                            break
                        }
                    }
                }
                if(aux){
                    const aux = env.guardar(this.id,this.list,this.type,0,0)
                }
            }
        }else if(exp1 == null && exp2 == null && this.list == null &&  this.fun!=null){
            let arr = this.fun?.execute(env)  
            if(arr!=null){
                let valor = []
                for(const i of arr.value){
                    valor.push(i)
                }
                const aux = env.saveVar(this.id,valor,Type.CHAR,null,null)
            }
        }
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo:""};
      }
      
}