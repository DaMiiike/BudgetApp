// INPUT TRIGGER

document.querySelector("button").addEventListener("click", inputBudget)

// Lists
let incomeList = [];
let costList = [];

function inputBudget(e) {
    e.preventDefault();

    // Value
    const select = document.querySelector("select")
    const description = document.querySelector("#description").value;
    const amount = document.querySelector("#amount").value;
    
    if(select.value=="+") {
        document
        .querySelector(".income-container")
        .innerHTML +=`<li class="income-list"> ${description} : ${amount} Kr</li>`;

        incomeList.push(amount)
    }
    else if(select.value=="-"){
        document
        .querySelector(".cost-container")
        .innerHTML += `<li class="cost-list"> ${description} : ${amount} Kr</li>`;

        costList.push(amount)
    }
    else if(select.value=="choose"){
        alert("Var vänlig och välj ett alternativ!")
    }
    
    // ADD INCOME
    let incomeSum = 0;
    for (var i = 0; i < incomeList.length; i++) {
        
        incomeSum += Number(incomeList[i]);
        
    }
    //ADD COST
    let costSum = 0;
    for (var i = 0; i < costList.length; i++) {

        costSum += Number(costList[i]);
    }
    
    let totSum = incomeSum - costSum;

    document
    .querySelector(".total-container")
    .innerHTML = `<p>Totalt: ${totSum} Kr</p>`
}