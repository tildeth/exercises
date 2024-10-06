const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function makeBread(){
    const breadUI = document.getElementById('broed');
    breadUI.innerHTML = '';

    bc.forEach((item, index) =>{
        const li = document.createElement('li');

        if (index < bc.length -1) {
            const a = document.createElement('a');
            a.href = item.link;
            a.textContent = item.name;
            li.appendChild(a);
        } else{
            li.textContent = item.name;
        }
        breadUI.appendChild(li);
    
    })
}

document.getElementById('broedMaker').addEventListener('mousedown', makeBread);