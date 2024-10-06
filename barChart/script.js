let customerData = [];

const chartContainer = document.getElementById('chart');

function generateRandomCustomerCount(){
    return Math.floor(Math.random()* 101);
}



function createBar(customerCount){
 const bar = document.createElement('div');
 bar.classList.add('bar');
 bar.style.setProperty('--height', customerCount + '%');
 return bar;
}

function updateChart(){
    const newCustomerCount = generateRandomCustomerCount();

    customerData.push(newCustomerCount)
    if (customerData.length > 20){
        customerData.shift();
    }
    chartContainer.innerHTML = '';
    customerData.forEach(customerCount =>{
        const bar = createBar(customerCount);
        chartContainer.appendChild(bar);
    });
}

setInterval(updateChart, 1000);