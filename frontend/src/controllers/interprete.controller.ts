import { Request, Response } from "express";
import { printlist } from "./interpreter/Reports/PrintList";
import { Environment } from "./interpreter/abstract/Environment";
import { Funcion } from "./interpreter/instruction/Funcion";
import { Declarar } from "./interpreter/instruction/Declarar";

class InterpreteController {

  public pong(req: Request, res: Response) {
    res.send("Pong interpreter controller OLC1");
  }

  public interpretar(req: Request, res: Response) {
    var parser = require("./interpreter/grammar");

    const text = req.body.code;
    console.log("Codigo de entrada:  " + text);

    try {
      const ast = parser.parse(text); 
      try {
        printlist.splice(0, printlist.length);
        
        const globalEnv = new Environment(null);

        for (const inst of ast){
          if(inst instanceof Declarar){
            inst.execute(globalEnv);
          }else if(inst instanceof Funcion){
            inst.execute(globalEnv);
          }
        }
        

        // seguna pasada para el main
        /*for (const inst of ast){
          if(inst instanceof Main){
            inst.execute(globalEnv);
          }
        }*/
        
        /*for (const inst of ast){
            inst.execute(globalEnv);
        }*/

          
          let drawast = `
          digraph G{
              nodoPrincipal[label="AST"];\n
          `;
          for (const inst of ast) {
            const dAst = inst.drawAst();
            drawast += `${dAst.rama}\n`;
            drawast += `nodoPrincipal -> ${dAst.nodo};`;
          }

          drawast += "\n}";


        res.json({ consola:printlist.join("\n"), errores: "ninguno", ast: drawast });

      } catch (error) {
        console.log(error);
        res.json({
          consola: error,
          errores: error,
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        consola: err,
        errores: err,
      });
    }
  }
}

export const interpreteController = new InterpreteController();
