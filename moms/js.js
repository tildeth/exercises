
let resultat


function momsBeregner(beloeb, moms = 0.25){
 resultat = beloeb + (moms * beloeb)
}

momsBeregner(400)

console.log("Beløbet med moms er:"+ resultat);