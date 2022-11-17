export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}


/* 
O método login recebe como parâmetro a classe 'funcionario', mas pode receber qualquer classe herdada de 'funcionario' também, 
como gerente e diretor. Esse conceito recebe o nome de 'polimorfismo'.

Ser autenticável significa ter o método 'autenticar()'

Duck Typing é testar se determinados objetos têm as mesmas funções de outros objetos, podem assim serem atribuídas como esses segundos.
Ou seja, mesmo sendo objetos diferentes, pelo fato de possuirem os mesmos métodos, podem ser consideradas como esses objetos.

*/
