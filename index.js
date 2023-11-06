// Iniciando a classe.

class Heroi {
    constructor(tipo, idade, nome){

        this.nome  = nome;
        this.idade = idade;
        this.tipo  = tipo;
    }
    
    atacar(){

        let ataque;

        if(this.tipo === mago){
             return ataque + "usou magia";
        }else if(this.tipo == guerreiro){
            console.log("usou laminas")
        }else if(this.tipo == monge){
            console.log("usou artes marciais")
        }else if(this.tipo == ninja){
            console.log("usou shuriken")
        }

         console.log(`"O ${tipo} atacou usando ${ataque}"`)
    }
   
}

const heroi1 = new Heroi('Kratos', 1000,'magia')

heroi1.atacar();