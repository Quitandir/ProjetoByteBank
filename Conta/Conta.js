export class Conta {
    constructor(saldoInicial, cliente, agencia) {

        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar um objeto do tipo conta diretamente, pois é uma classe abstrata.")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Para não deixar o método ser chamado diretamente do objeto Conta, deixamos ele vazio lançando um erro caso chamado.
    sacar(valor) {

        throw new Error("O método sacar da Conta é abstrato.")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}