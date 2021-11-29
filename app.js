// INPUTS

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
        console.log("här var det plus!!!!")  //to be removed at final stage

        document
        .querySelector(".income-container")
        .innerHTML +=`<li class="income-list"> ${description} : ${amount}Kr</li>`;

        incomeList.push(amount)

        console.log(incomeList)

    }
    else if(select.value=="-"){
        console.log("här var det minus!!! :(") // to be removed at the final stage

        document
        .querySelector(".cost-container")
        .innerHTML += `<li class="cost-list"> ${description} : ${amount}Kr</li>`;

        costList.push(amount)
        console.log(costList);

    }
    else if(select.value=="choose"){
        alert("Var vänlig och välj ett alternativ!")
    }
    


    

}

function totalSum(e) {
    e.preventDefault();
    // Totals
    let incomeTot = 0;
    let costTot = 0;

    
    incomeList.map( (e)=> {


    console.log(parseFloat(e))
    incomeTot += e;

    })
}