class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log('faluandu')
    }
}


const p1 = new Pessoa('Luiz', 'Miranda')