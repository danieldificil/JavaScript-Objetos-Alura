function Cliente(nome,cpf,email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const Daniel = new Cliente("Daniel","2312321321321", "toplactoplay@noratio.fly", 777)
console.log(Daniel)

Daniel.depositar(111)
console.log(Daniel)

Daniel.depositar(-111)
console.log(Daniel)
