class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
        depositar(valor){
        this.saldo += valor;
        }
        exibirSaldo(){
            console.log(`seu saldo é ${this.saldo}`);
        }
}
const Daniel = new Cliente('Daniel', 'toplactoplay@noratio.fly', '777.777.777-77', 100);

console.log(Daniel);
Daniel.exibirSaldo();