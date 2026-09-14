const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nomeTitular = "João Silva";
const agencia = "0001";
const numeroConta = "12345-6";

let saldo = 1000.00;

function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function exibirMenu() {
  console.log("\n==============================");
  console.log("   MINI SISTEMA BANCÁRIO");
  console.log("==============================");
  console.log("1 - Consultar dados da Conta");
  console.log("2 - Consultar Saldo");
  console.log("3 - Realizar Saque");
  console.log("4 - Realizar Depósito");
  console.log("5 - Sair");
  console.log("==============================");

  rl.question("Escolha uma opção: ", function(opcao) {
    switch (opcao) {
      
      case '1':
        console.log("\n--- Dados da Conta ---");
        console.log(`Titular: ${nomeTitular}`);
        console.log(`Agência: ${agencia}`);
        console.log(`Conta:   ${numeroConta}`);
        exibirMenu();
        break;
        
      case '2':
        console.log(`\nSeu saldo atual é de: ${formatarMoeda(saldo)}`);
        exibirMenu();
        break;
        
      case '3':
        rl.question("\nDigite o valor que deseja sacar: R$ ", function(valorDigitado) {
          const valorDebito = parseFloat(valorDigitado.replace(',', '.'));
          
          if (isNaN(valorDebito) || valorDebito <= 0) {
            console.log("Valor inválido! Tente novamente.");
          } else if (valorDebito > saldo) {
            console.log("Atenção: Saldo insuficiente para esta operação!");
          } else {
            saldo = saldo - valorDebito;
            console.log(`Saque de ${formatarMoeda(valorDebito)} realizado com sucesso!`);
          }
          exibirMenu();
        });
        break;
        
      case '4':
        rl.question("\nDigite o valor que deseja depositar: R$ ", function(valorDigitado) {
          const valorCredito = parseFloat(valorDigitado.replace(',', '.'));
          
          if (isNaN(valorCredito) || valorCredito <= 0) {
            console.log("Valor inválido! Tente novamente.");
          } else {
            saldo = saldo + valorCredito;
            console.log(`Depósito de ${formatarMoeda(valorCredito)} realizado com sucesso!`);
          }
          exibirMenu();
        });
        break;
        
      case '5':
        console.log("\nEncerrando o sistema... Obrigado por utilizar nosso banco!");
        rl.close();
        break;
        
      default:
        console.log("\nOpção inválida. Por favor, escolha um número de 1 a 5.");
        exibirMenu();
        break;
    }
  });
}

exibirMenu();