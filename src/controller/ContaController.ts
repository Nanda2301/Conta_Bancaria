import { Conta } from "../model/Conta";
import { colors} from "../util/Colors";
import { AccountRepository } from "../repository/AccountRepository";

export class ContaController implements AccountRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    _numero: number = 0;


    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else
            console.log(colors.fg.red,"\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        };
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.red, "\nA Conta numero: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero + " não foi encontrada!", colors.reset);
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green,"\nA Conta numero: " + numero + " Foi apagada com sucesso!", colors.reset);

        }else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + " Não foi encontrada!", colors.reset);
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if(conta.sacar(valor) == true)
            console.log(colors.fg.green,"\nO Saque na Conta numero: " + numero + " Foi efetuado com sucesso!", colors.reset);
        } else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + " Não foi encontrada!!", colors.reset);
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green,"\nO Depósito na Conta numero: " + numero + " Foi efetuado com sucesso!", colors.reset);

        }else
        console.log(colors.fg.red, "\nA conta numero: " + numero + "Não foi encontrada!!", colors.reset);
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if(contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log(colors.fg.green,"\nA Trasferencia da Conta numero: " + numeroOrigem + " para a Conta numero: " + numeroDestino + " Foi efetuada com sucesso!", colors.reset);
            }
        }else
        console.log(colors.fg.red, "\nA conta numero: " + numeroOrigem + " e/ou a Conta numero: " + numeroDestino + " Não foram encontradas!", colors.reset);
    }
    //Gerar Números da Connta
    public gerarNumero(): number {
        return ++ this._numero;
    }

    //Checa se uma conta existe
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    } 
}