import * as readlineSync from "readline-sync";
import { Conta } from "../model/Conta";
import { Colors } from "../util/Colors";

export class Menu {

    private conta: Conta[] = [];

    public iniciar(): void {

        let opcao: number;

        do {
            console.log("****************************************");
            console.log("         BANCO DO BRAZIL COM Z          ");
            console.log("****************************************");
            console.log("1 - Criar Conta");
            console.log("2 - Listar todas as Contas");
            console.log("3 - Buscar Conta por Numero");
            console.log("4 - Atualizar Dados da Conta");
            console.log("5 - Apagar Conta");
            console.log("6 - Sacar");
            console.log("7 - Depositar");
            console.log("8 - Transferir valores entre Contas");
            console.log("9 - Sair");
            console.log("****************************************");

            opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        } while (opcao !== 9);

    }
}
