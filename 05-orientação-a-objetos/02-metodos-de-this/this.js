// const pessoa = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeNome: function(){
//         console.log(`${pessoa.nome}`)
//     }
// }
//
// pessoa.imprimeNome() //Ana
//
// const pessoa2 = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeNome: function(){
//         console.log(`${this.nome}`)
//     }
// }
//
// pessoa2.imprimeNome() //Ana
//

 function imprimeNomeEmail(){
     console.log(`nome: ${this.nome}, email ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com


//call
function imprimeNomeEmail2(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente6 = {
    nome: "Carlos",
    email: "c@email.com"
}

imprimeNomeEmail2.call(cliente6, "cliente especial")

//apply
function imprimeNomeEmai3(tipoCliente, agencia){
    console.log(`
   ${tipoCliente} da agência ${agencia}:
   - nome: ${this.nome}, email: ${this.email}
   `)
}

const cliente7 = {
    nome: "Carlos",
    email: "c@email.com"
}
const cliente7Arguments = ["Cliente especial", "São Paulo"]
imprimeNomeEmai3.apply(cliente7, cliente7Arguments)

//bind

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
        return `a personagem é ${this.nome}`
    }
}

//sem bind da undefined, nao associa ao contexto do objeto personagem
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico());

//com bind

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido());