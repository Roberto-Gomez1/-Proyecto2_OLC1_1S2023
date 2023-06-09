import { Simbolo } from "./Symbol";
import { Type } from "./Return";
import { printlist } from "../Reports/PrintList";
import { Funcion } from "../instruction/Funcion";
import { ListaTabla,TablaSimbolos } from "../Reports/TablaSimbolos";
import { Instruction } from "./Instruction";
import { Declarar } from "../instruction/Declarar";

export class Environment {
    private variables = new Map<string, Simbolo>();   //  mapa de variables
    private funciones = new Map<string, Funcion>();   //  mapa de variables
   
    constructor(private anterior: Environment | null) {
      this.variables = new Map<string, Simbolo>();
      
    }
  
    public guardar(id: string, valor: any , tipo: Type,linea:number,columna:number)  {
      let env: Environment | null = this;
  
      if (!env.variables.has(id.toLowerCase())) {
        env.variables.set(id.toLowerCase(), new Simbolo(valor, id, tipo));
      }else {
        printlist.push("Error, La variable "+id+" ya existe en el entorno, linea "+linea+" y columna "+columna);
      }
  
    }

    public guardarVector(id: string, valor: any , tipo: Type,linea:number,columna:number)  {
      let env: Environment | null = this;
  
      if (!env.variables.has(id.toLowerCase())) {
        env.variables.set(id.toLowerCase(), new Simbolo(valor, id, tipo));
      }else {
        printlist.push("Error, La variable "+id+" ya existe en el entorno, linea "+linea+" y columna "+columna);
      }
  
    }


    public getVar(id: string): Simbolo | null { 
      let env: Environment | null = this;

      while (env != null) {
       if(env.variables.has(id.toLowerCase())){
        return env.variables.get(id.toLowerCase())!;
       }
        env = env.anterior;
      }  
      return null;  
    }
    public saveVar(nombre: string, valor: any, type: Type,ins:Array<Instruction>|null,param:Array<Declarar>|null): boolean {
      if(!this.getVar(nombre)){
        return true
      }
      return false
  }

  public guardarFuncion(id: string, funcion: Funcion) {
    let env: Environment | null = this;

    if (!env.funciones.has(id.toLowerCase())) {
      env.funciones.set(id.toLowerCase(),funcion);
    }else {
      printlist.push("Error, La funcion "+id+" ya existe en el entorno");
    }
  }

  public getFuncion(id: string): Funcion | null {
    let env: Environment | null = this;
    while (env != null) {
      if (env.funciones.has(id.toLowerCase())) {
        return env.funciones.get(id.toLowerCase())!;
      }
      env = env.anterior;
    }

    return null;
  }

  public getGlobal(): Environment {
    let env: Environment | null = this;

    while (env.anterior != null) {
      env = env.anterior;
    }
    return env;
  }

  public modificar(id: string, valor: any) {
    let env: Environment | null = this;
    while (env != null) {
      if (env.variables.has(id.toLowerCase())) {
        env.variables.get(id.toLowerCase())!.valor = valor;
        return;
      }
      env = env.anterior;
    }
  }



}
  
