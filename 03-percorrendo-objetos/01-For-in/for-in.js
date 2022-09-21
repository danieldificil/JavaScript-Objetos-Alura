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
let relatorio = ""
console.log(relatorio);

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else{
    relatorio += `
    ${info} ==> ${cliente[info]}
    `
    }
}
console.log(relatorio);