//import { Environment } from "../Symbol/Environment"
import { Env } from "../symbols/env"

export abstract class Instruction {

    constructor(public line: number, public column: number) {
        this.line = line
        this.column = column + 1
    }

    public abstract execute(env: Env): any
    public abstract ast(): void

}