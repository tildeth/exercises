
let randomNumber = Math.floor(Math.random() * 101);

const gaetInput =document.getElementById("gaetInput");
const knap =document.getElementById("knap");
const feedback =document.getElementById("feedback");
const korrekt =document.getElementById("korrekt");

knap.addEventListener("click", function(){
    let brugerGaet = Number(gaetInput.value);

    if(brugerGaet > randomNumber){
        feedback.textContent = "Dit gæt er for højt!";
        feedback.style.color = "red";
    } else if (brugerGaet < randomNumber) {
        feedback.textContent = "Dit gæt er for lavt!";
        feedback.style.color = "red";
    } else if (brugerGaet === randomNumber) {
        feedback.textContent = "Tillykke! Det var rigtigt!";
        feedback.style.color = 'green';

        korrekt.style.display= "block";
        korrekt.style.animation = "korrektAnimation 1s infinite";
    } else{
        feedback.textContent = "Indtast et gyldigt tal";
    }
})




