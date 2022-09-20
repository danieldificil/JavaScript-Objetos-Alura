const cliente = {
    nome: "Daniel",
    idade: "28",
    cpf: "111.111.117-77",
    email: "daniel777@hotsete.com",
    fones: ["4002-8922", "7777-7777"]
}

cliente.dependentes = {
    nome: "Heloísa",
    parentesco: "xxxxxx",
    idade: "4",
    cpf: "123123123123",
}
console.log(cliente);

cliente.dependentes.nome = "Diana"

console.log(cliente);