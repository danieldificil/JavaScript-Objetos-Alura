class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`O valor de R$${valor} foi depositado a sua conta`)
    }
    exibirSaldo(){
        console.log(`O saldo atual é de R$${this.saldo}`)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo,saldoPoupanca) {
        super(nome, cpf, email, saldo);
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
        console.log(`O valor de R$${valor} foi depositado em sua conta poupanca`)
    }

    exibirSaldoPoupanca(){
        console.log(`
O saldo atual da sua conta
Poupança é de R$${this.saldoPoupanca}`)
    }
}

const Daniel = new ClientePoupanca("Daniel", "777.777.777-77", "toplactoplay@noratio.fly", 100, 200)
console.log(Daniel);

Daniel.depositarPoupanca(100)
console.log(Daniel);

Daniel.depositar(100)
console.log(Daniel);

Daniel.exibirSaldo()
Daniel.exibirSaldoPoupanca()
