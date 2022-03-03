const prompt = require('prompt-sync')();
console.log()
console.log(`-=-=-=-=-=-=-`)
console.log(`JOGO DE DADOS`)
console.log(`-=-=-=-=-=-=-`)
console.log()
console.log(`Obs: caso dois ou mais usuários tirem o número maior igualmente, será computado como vitória para os mesmos.`)
console.log()
let numJogadores= parseInt(prompt('Quantas jogadores desejam jogar? -> '));
while((isNaN(numJogadores))){
    console.log()
    console.log(`Somente números são aceitos!`)
    console.log()
    numJogadores= parseInt(prompt('Quantas jogadores desejam jogar? -> '));
     if(!isNaN(numJogadores)){
         break;
     }
    }
console.log()
let rodadas = parseInt(prompt(`Quantas rodadas? -> `))
while((isNaN(rodadas))){
    console.log()
    console.log(`Somente números são aceitos!`)
    console.log()
    rodadas = parseInt(prompt(`Quantas rodadas? -> `))
     if(!isNaN(rodadas)){
         console.log()
         console.log(`Perfeito! Vamos lá!`)
         break;
     }
    }
    console.log()
    console.log(`Jogaremos ${rodadas} RODADAS com ${numJogadores} JOGADORES!`)
    console.log()
let min = 1;
let max = 7;
min = Math.ceil(min);
max = Math.floor(max);
const jogadores = [];

for(let j=0;j<numJogadores;j++){
    let jogador = {
        nome: '',
        numeros:[],
        vitorias:0
    };
    jogador.nome=String(prompt(`Digite o nome do ${j+1} jogador -> `)).trim()
    while(!isNaN(jogador.nome)){
        console.log()
        console.log(`Nome só pode ter letras!`)
        console.log()
        jogador.nome=String(prompt(`Digite o nome do ${j+1} jogador -> `)).trim()
        console.log()
    if(isNaN(jogador.nome)){
        break;
    }

    }
    if(numJogadores===1){
        console.log()
        console.log('O ganhador sem disputar com ninguém foi: '+`${jogador.nome}`+'! PARABÉNS 😎🎉 ')
        console.log()
        console.log(`OBS: o jogo fica melhor quando se adiciona mais de um jogador! 🤣`)
        console.log()
        console.log(`Dúvidas, melhorias e etc -> kellbberbarcarolo@gmail.com - Obrigado(a) pelo feedback!`)
        console.log()
        return;
    }
    console.log()
    for(let r=0;r<rodadas;r++){
    jogador.numeros.push(Math.floor(Math.random() * (max - min)) + min);
    }
    jogadores.push(jogador)   
}
    for(let i=0;i<rodadas;i++){
    jogadores.sort(function (a, b) {
        return a.numeros[i] - b.numeros[i];
      }).reverse();
      if(jogadores[0].numeros[i]===jogadores[1].numeros[i]){
          jogadores[0].vitorias++
          jogadores[1].vitorias++
      }else{
      jogadores[0].vitorias++
      }
}
console.clear()
let ganhadorNome='';
let ganhadorNumero=0;
let empatados= [];    
    if(jogadores[0].vitorias==jogadores[1].vitorias){
        empatados.push(jogadores[0].nome)
        empatados.push(jogadores[1].nome)
    }
    if(empatados[0]===undefined){
    
    for (let i = 0; i<numJogadores; i++) {
        if (jogadores[i].vitorias> ganhadorNumero) {
         ganhadorNumero= jogadores[i].vitorias;
         ganhadorNome = jogadores[i].nome;
    } 
  }
    console.log()
    console.log('Usando os critérios do jogo, o ganhador foi: '+`${ganhadorNome}`+'! PARABÉNS 😎🎉')
    console.log()
    }else{
    const empates = empatados.length
    if(empates==2){
        console.log(`Houve um empate entre os jogadores: ${empatados[0]} e ${empatados[1]}`)
    }
    
    }

console.table(jogadores)
console.log()
console.log(`Dúvidas, melhorias e etc -> kellbberbarcarolo@gmail.com - Obrigado(a) pelo feedback!`)
console.log()


