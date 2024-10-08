const myName = "Tilde Twisttmann Henriksen";
const fName = myName.substring(0, myName.indexOf(" "));
const mName = myName.substring(myName.indexOf(" ")+1, myName.lastIndexOf(" "));

console.log(fName)
console.log(mName)