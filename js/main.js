
// Card added start
const findCardParent = document.getElementById("allCard");

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
    <button class="w-full h-14 text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800" id="card-button-${i}">
        SELECT</button>
</div>
</div>`;
    findCardParent.appendChild(createCard);
}
// Card added end



// Select player Count start

let count = 0

for (let i = 0; i < allCard.length; i++) {
    document.getElementById(`card-button-${i}`).addEventListener("click", function (event) {

        if (count !== 5) {
            const findButton = event.target
            findButton.setAttribute("disabled", true);
            findButton.style.backgroundColor = "gray";

            const findPlayerName = event.target.parentNode.children[0].innerText;

            const findOrderList = document.getElementById("orderList")
            const createList = document.createElement("li")
            count = count + 1;
            createList.innerHTML = ` ${count}. ${findPlayerName} `
            findOrderList.appendChild(createList)
        }
        else {
            alert("Not more than five people can be selected")
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

    let coachCost = inputFieldFind("coach");
    let managerCost = inputFieldFind("manager");

    if (isNaN(managerCost) || managerCost < 0 || isNaN(coachCost) || coachCost < 0) {
        alert("Please select player or input manager and coach tk ( If not, input '0' ) ")
    }
    else {
        const totalCost = preExpencesValue + managerCost + coachCost;
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
