const acesseSuaContaNoBancoItau = ('Ìtau, feito para você');
console.log(acesseSuaContaNoBancoItau);

const acessoAConta = ('Para entrar na sua conta, digite sua chave de segurança de 6 digitos');
console.log(acessoAConta);

const saudaçao = ' Seja bem Vindo a sua conta corrente!';

const usuario  = true;


if (usuario === true){
    console.log('Suas credenciais foram autentificadas Sr Leonardo Michetti ✓'.toLocaleUpperCase());
} else { 
    console.log ('Você não é o Leonardo, confirme seus dados novamente :(');
}



let saldoAtual = 8000;
let valorDeposito = 1000;
let valorInvestimento = 500;
let valorDebitos = 5000;








console.log(saudaçao);
console.log(`seu Saldo é de ${saldoAtual} reais`);


const escolha = "Por favor, escolha uma ação";
console.log(escolha);


const escolhaDaAcao = '5';

if (escolhaDaAcao === '1') {
  console.log('Opção escolhida: Transferência');
} else if (escolhaDaAcao === '2') {
  console.log('Opção escolhida: Extrato');
} else if (escolhaDaAcao === '3') {
    console.log('Opção escolhida: Fazer um Pix');
} else if (escolhaDaAcao === '4') {
  console.log('Opção escolhida: Fazer depósito');
} else if (escolhaDaAcao === '5') {
  console.log('Opção escolhida: Investimentos');
} else if (escolhaDaAcao === '6') {
  console.log('Opção escolhida: Débitos');
} else if (escolhaDaAcao === '7') {
  console.log('Opção escolhida: Outros Serviços');
} else {
  console.log('Opção inválida, escolha uma aletrnativa novamente');
}




function operacaoBancaria (saldoAtual, valorInvestimento){
    let extrato = saldoAtual - valorInvestimento
    return extrato
} console.log (`Seu saldo após seus investimentos, é de: ${operacaoBancaria(saldoAtual, valorInvestimento)} reais`)



const novaEscolha = "Por favor, escolha novamente uma ação";
console.log(novaEscolha);


const escolhaDaAcao2 = '6';

if (escolhaDaAcao2 === '1') {
  console.log('Opção escolhida: Transferência');
} else if (escolhaDaAcao2 === '2') {
  console.log('Opção escolhida: Extrato');
} else if (escolhaDaAcao2 === '3') {
    console.log('Opção escolhida: Fazer um Pix');
} else if (escolhaDaAcao2 === '4') {
  console.log('Opção escolhida: Fazer depósito');
} else if (escolhaDaAcao2 === '5') {
  console.log('Opção escolhida: Investimentos');
} else if (escolhaDaAcao2 === '6') {
  console.log('Opção escolhida: Débitos');
} else if (escolhaDaAcao2 === '7') {
  console.log('Opção escolhida: Outros Serviços');
} else {
  console.log('Opção inválida, escolha uma aletrnativa novamente');
}


const pagarContas = ('Leonardo, você possui debitos a realizar, por favor, efetive-os para que o alerta saia de sua tela principal :(');
console.log(pagarContas);


function outraOperacaoBancaria(saldoAtual, valorDebitos) { 
    let extrato = saldoAtual - valorDebitos
    return extrato }
    console.log (`seu saldo após o pagamento dos débitos é de ${outraOperacaoBancaria(saldoAtual, valorDebitos)} reais.`);
    


const sairDoBanco = ('Caso queira sair do app, digite sua senha de 6 digitos no bloco a seguir ➔.');
console.log(sairDoBanco);




const opcoesDeSaida = '2';

if (opcoesDeSaida === '1'){
    console.log('Opção escolhida: Voltar ao menu Inicial');
} else if (opcoesDeSaida ==='2') {
    console.log ('Opção escolhida: Sair do App, por favor, insira sua chave de segurança de 6 digitos para fechar o aplicativo')
}

let digitarSenha = true;


if (digitarSenha === true){
 console.log ('Sua senha esta correta, você já pode sair em segurança!, muito obrigado e até a próxima!')} else{ 
 console.log ('Senha incorreta, você só tem mais 3 tentativas, após isto o bloqueio da sua conta, será efetuado. :(') };




