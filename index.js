import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123")

const cliente = new Cliente ("Lais", 12346578900, "456");

const contaCorrente = new ContaCorrente (0, "Lais", 1001);
contaCorrente.depositar(500);
contaCorrente.sacar(10);


const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteLogado);


