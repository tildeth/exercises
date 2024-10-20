"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const Animal ={
    name: "-deafult name-", 
    desc: "-no description-",
    type: "-unknown-",
    age: 0
};

function start( ) {
    console.log("ready");
    registerButtons();
    loadJSON();
}

function registerButtons(){
    document.querySelectorAll("[data-action='filter']").forEach(button => button.addEventListener("click", selectFilter));
    document.querySelectorAll("[data-action='sort']").forEach(button => button.addEventListener("click", selectSort));

}

function selectFilter(event){
    const filter = event.target.dataset.filter;
    filterList(filter);
}

async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();

    prepareObjects(jsonData);
}

function prepareObjects( jsonData ) {
 allAnimals = jsonData.map(prepareObject);

 displayList(allAnimals);
        
    };

function prepareObject (jsonObject){
        const animal = Object.create(Animal);

        const texts = jsonObject.fullname.split(" ");
        animal.name = texts[0];
        animal.desc = texts[2];
        animal.type = texts[3];
        animal.age = jsonObject.age;

        return animal;
    }


function filterList(animalType){
  let filteredList = allAnimals;  
  if (animalType === "cat"){
      filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog"){
      filteredList = allAnimals.filter(isDog);
  }


displayList(filteredList)
};

function isCat (animal){
 return animal.type === "cat";
}
function isDog (animal){
    return animal.type === "dog";
   }

function selectSort(event){
    const sortBy = event.target.dataset.sort;
    const sortDir = event.target.dataset.sortDirection;

    //toggle direction
    if(sortDir === "asc"){
        event.target.dataset.sortDirection = "desc";
    } else {
        event.target.dataset.sortDirection = "asc";
    }
    console.log(`User selected ${sortBy} - ${sortDir}`);
    sortList(sortBy, sortDir);
}

function sortList(sortBy, sortDir){
    let sortedList = allAnimals;
    let direction = 1;
    if(sortDir === "desc"){
        direction= -1;
    } else {
        direction = 1;
    }

    sortedList = sortedList.sort(sortByProperty);
   
    function sortByProperty(animalA, animalB){
        if(animalA[sortBy] < animalB[sortBy]){
            return -1 * direction;
        }else {
            return 1 * direction;
        }
    }

    displayList(sortedList);
    
 }

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


