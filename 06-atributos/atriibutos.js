const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
        {
            "id": 50,
            "titulo": "Primeiros Passos com NodeJS",
            "autor": "João Rubens",
            "categoria": "programação",
            "versoes": ["ebook", "impresso"]
        }
    ]}

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))

// hasOwnProperty
// função construtora

function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
// criando nova instância
const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)

// novo tipo de função cliente
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}
const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200)

//Manipulando prototype
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
//logs

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)
