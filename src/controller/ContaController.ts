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
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, vvalor: number): void {
        throw new Error("Method not implemented.");
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