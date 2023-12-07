let victory = 34
let defeat = 9
let classeHeroi = ""

let finalResult = saldoaRankeadas(victory, defeat)

function saldoaRankeadas(vVictory, dDefeat) {
    let result = (vVictory - dDefeat)
    return result;
}
if(finalResult <= 10){
    classeHeroi = "Ferro"
}
else if(finalResult > 10 && finalResult <= 20){
    classeHeroi = "Bronze"
}
else if(finalResult > 20 && finalResult <= 50){
    classeHeroi = "Prata"
}
else if(finalResult > 50 && finalResult <= 80){
    classeHeroi = "Ouro"
}
else if(finalResult > 80 && finalResult <= 90){
    classeHeroi = "Diamante"
}
else if(finalResult > 90 && finalResult <= 100){
    classeHeroi = "Lendario"
}
else if(finalResult > 100){
    classeHeroi = "Imortal"
}
else{classeHeroi = "Insira apenas números"}

console.log(`O Herói tem de saldo de ${finalResult} vitorias e está no nível de ${classeHeroi}`)

