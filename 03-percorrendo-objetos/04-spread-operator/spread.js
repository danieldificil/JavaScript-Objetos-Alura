const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)

const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro2)

// spread operator com objetos de mesma chave

const mago3 = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro3 = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const ranger3 = {
    nome: "Legolas",
    classe: "ranger"
}

const guild = { ...mago3, ...guerreiro3, ...ranger3}
console.log(guild);