// Iniciando a classe.

class Heroi {
    constructor(nome, idade, tipo ){

        this.nome  = nome;
        this.idade = idade;
        this.tipo  = tipo;
    }
    
    atacar(){

        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia da luz';
                break;
            case 'guerreiro':
                ataque = 'as laminas do caos';
                break;
            case 'monge':
                ataque = 'naginata';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'esperando para atacar.';
        }
         console.log("O " + this.nome + " com a idade de : " + this.idade + " anos " +  " atacou usando:  " + ataque)
    }
   
}

    const mago = "";
    const guerreiro = "";
    const monge = "";
    const ninja = "";

const heroi1 = new Heroi('Merlim', 10000,'mago');
const heroi2 = new Heroi('Kratos', 1000000,'guerreiro');
const heroi3 = new Heroi('Benkei', 80,'monge');
const heroi4 = new Heroi('Mochizuki Chiyome', 40,'ninja');
const heroi5 = new Heroi('Desconhecido', 'não declarada');


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
heroi5.atacar();