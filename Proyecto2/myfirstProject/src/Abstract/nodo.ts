export default class nodo {
    public valor:String;
    public hijos: Array<nodo>;

    constructor(valor:String) {
        this.valor=valor;    
        this.hijos= new Array<nodo>();
    }

    public setHijos(hijos:Array<nodo>) {
        this.hijos = hijos;
    }

    public getValor():String {
        return this.valor;
    }

    public getHijos():Array<nodo>
    {
        return this.hijos;
    }

    public agregarHijo(valor:String) {
        this.hijos.push(new nodo(valor));
    }


    public agregarHijos(hijos:Array<nodo>){
        for(let hijo of hijos) {
            this.hijos.push(hijo);
        }
    }

    public agregarHijo_nodo(hijo:nodo) {
        this.hijos.push(hijo);
    }

    public agregarPrimerHijo(valor:String) {
        this.hijos.unshift(new nodo(valor));
    }

    public agregarPrimerHijo_nodo(hijo:nodo) {
        this.hijos.unshift(hijo);
    }

    
}