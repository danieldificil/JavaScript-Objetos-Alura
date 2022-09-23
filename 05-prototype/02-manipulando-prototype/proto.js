function Cliente(nome,cpf,email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor
    }
}
function ClientePoupanca(nome,cpf,email, saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Daniel = new ClientePoupanca("Daniel","21321321312", "toplactoplay@noratio.fly",100, 200)
console.log(ClientePoupanca);

ClientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor
}

Daniel.depositarPoup(30)
console.log(Daniel);