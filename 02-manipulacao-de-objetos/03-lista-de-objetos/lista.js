const cliente ={
    nome: 'Daniel',
    idade: '28',
    cpf: '111.111.117-77',
    email: 'daniel777@hotsete.com',
    fones: [ '4002-8922', '7777-7777' ],
    dependentes: [
        {
            nome: 'Heloísa',
            parentesco: 'xxxxxx',
            idade: 4,
            cpf: '123123123123'
        }
    ]
}

cliente.dependentes.push({
    nome: 'Diana',
    parentesco: 'xxxxxx',
    idade: 1,
    cpf: '12323123123'
})

console.log(cliente)

const filhaMaisVelha = cliente.dependentes.filter((dependente) => dependente.idade > 1)
console.log(filhaMaisVelha);
