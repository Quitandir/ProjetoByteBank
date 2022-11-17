import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(saldoIncial, cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobreescrevendo o comportamento de sacar da classe parent.
    sacar(valor, taxa) {
        var taxa = 1.1;
        return this._sacar(valor, taxa);
    }
    
}
