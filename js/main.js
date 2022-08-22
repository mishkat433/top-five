
// Dinamic card added start
const findCardParent = document.getElementById("allDinamicCard");

//  allCard import from cardObject.js
for (let i = 0; i < allCard.length; i++) {
    const createCard = document.createElement("div");

    createCard.innerHTML = `<div class="max-w-sm bg-slate-900 rounded-lg border shadow-md ">
<img class="rounded-t-lg h-60 w-full" id="img" src = " ${allCard[i].playerImage}" >
<div class="p-5">
    <h3 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">${allCard[i].playerName} </h3>
    <div class="flex justify-evenly my-4 text-xl text-white">
        <h4>${allCard[i].goal} Goals</h4>
        <h4>${allCard[i].assist} Assist</h4>
    </div>
    <button class="w-full h-14 text-center text-lg text-white bg-orange-600 rounded-lg hover:bg-orange-800" id="card-button-${i}">
        SELECT</button>
</div>
</div>`;
    findCardParent.appendChild(createCard);
}
// Dinamic card added end



// Select player Count start

let count = 0;

for (let i = 0; i < allCard.length; i++) {
    document.getElementById(`card-button-${i}`).addEventListener("click", function (event) {

        if (count !== 5) {
            const findSelectButton = event.target;
            findSelectButton.setAttribute("disabled", true);
            findSelectButton.style.backgroundColor = "gray";
            findSelectButton.innerText = "SELECTED";

            const selectPlayerName = event.target.parentNode.children[0].innerText;

            const findOrderList = document.getElementById("orderList")
            const createList = document.createElement("li")
            count = count + 1;
            createList.innerHTML = ` ${count}. ${selectPlayerName} `
            findOrderList.appendChild(createList);
        }
        else {
            alert("Not more than five Player can be selected");
        }
    })

}

// Select player Count end

// Per Player Cost Calcutale start
document.getElementById("perPlayerCalculate").addEventListener("click", function () {

    const perPlayerCost = inputFieldFind("perPlayer");

    if (count === 0 || isNaN(perPlayerCost) || perPlayerCost < 0) {
        alert("Please select player or input per player amount Positive value")
    }
    else {
        const perPlayerTotal = perPlayerCost * count;
        setValue("expences", perPlayerTotal);
    }

})

// Per Player Cost Calcutale end


// Total Cost Calculate start

document.getElementById("totalCalculate").addEventListener("click", function () {

    const preExpencesValueString = document.getElementById("expences").innerText;
    const preExpencesValue = parseFloat(preExpencesValueString);

    let coachSalary = inputFieldFind("coach");
    let managerSalary = inputFieldFind("manager");

    if (isNaN(managerSalary) || managerSalary < 0 || isNaN(coachSalary) || coachSalary < 0) {
        alert("Please select player and calculate per player amount or input manager and coach amount ( If not, input '0' ) ")
    }
    else {
        const totalCost = preExpencesValue + managerSalary + coachSalary;
        setValue("total", totalCost);
    }
})

// Total Cost Calculate end



// common function start

function inputFieldFind(fieldId) {
    const fieldString = document.getElementById(fieldId);
    const fieldValue = parseFloat(fieldString.value);

    return fieldValue;
}

function setValue(elementId, value) {
    const findElement = document.getElementById(elementId);
    findElement.innerText = value;
}

// common function end
