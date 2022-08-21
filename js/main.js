
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
        Read more</button>
</div>
</div>`;
    findCardParent.appendChild(createCard);
}
// Card added end



