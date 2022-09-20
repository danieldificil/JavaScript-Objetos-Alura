const cliente = {
    nome: "Daniel",
    idade: 28,
    cpf:"2321312312213-x",
    email: "sdsadsad@sdsad.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
console.log(cliente[chaves[0]]);

chaves.forEach((chave) => {console.log(cliente[chave])});