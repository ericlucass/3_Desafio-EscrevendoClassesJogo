const readlineSync = require('readline-sync');

let nome = readlineSync.question("Digite qual será o nome dele: ");
let tipo = readlineSync.question("Digite o tipo do seu Herói (Mago, Guerreiro, Monge ou Ninja): ");
let idade = readlineSync.question("Digite a idade do seu Herói : ");    

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome.toLowerCase();
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
        
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;
            case "guerreiro":
                ataque = "usando espada";
                break;
            case "monge":
                ataque = "usando artes marciais";
                break;
            case "ninja":
                ataque = "usando shuriken";
                break;
            default:
                ataque = "com um ataque indefinido";
        }

        console.log(`O ${this.tipo.charAt(0).toUpperCase() + this.tipo.slice(1)} ${this.nome.charAt(0).toUpperCase() + this.nome.slice(1)} atacou ${ataque}`);
    }
}



const teste = new Heroi( nome, idade, tipo);
//const guerreiro = new Heroi("Arthur", 35, "guerreiro");

teste.atacar(); // Saída: "O mago Merlin atacou usando magia"
//guerreiro.atacar(); // Saída: "O guerreiro Arthur atacou usando espada"
