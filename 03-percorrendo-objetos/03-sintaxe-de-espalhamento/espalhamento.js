const clientes = [
    {
        nome: 'Daniel',
        idade: '28',
        cpf: '111.111.117-77',
        email: 'daniel777@hotsete.com',
        fones: [ '4002-8922', '7777-7777' ],
        dependentes: [
            {
                nome: 'Heloísa',
                parentesco: 'filho',
                idade: 4,
                cpf: '123123123123'
            },
            {
                nome: 'Diana',
                parentesco: 'filho',
                idade: 1,
                cpf: '12323123123'
            }
        ],
        depositar: function (valor){
            this.saldo += valor
        }
    },
    {
        nome: 'Eric',
        idade: '27',
        cpf: '222.241.117-24',
        email: 'eric@hotsete.com',
        fones: [ '4003-8933', '2424-2424' ],
        dependentes: [
            {
                nome: 'Levi',
                parentesco: 'filho',
                idade: 1,
                cpf: '242.242.242-24'
            }
        ],
        depositar: function (valor){
            this.saldo += valor
        }
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes);

const array1 = ["abacaxi", "uva"]
const array2 = ["pera", "goiaba"]
const array3 = [...array1, ...array2]
console.log(array3)