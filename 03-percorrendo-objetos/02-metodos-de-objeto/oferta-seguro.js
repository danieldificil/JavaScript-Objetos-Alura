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
        },
        {
            nome: 'Diana',
            parentesco: 'xxxxxx',
            idade: 1,
            cpf: '12323123123'
        }
    ],
    depositar: function (valor){
        this.saldo += valor
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro para ${obj.nome}`)
    }
}

console.log(Object.values(cliente));// retorna os valores da chave
