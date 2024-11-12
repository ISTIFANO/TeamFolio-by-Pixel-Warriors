fetch("../src/data.json")
  .then((response) => response.json())
  .then((data) => displayServiceFaison(data.servicesFaison));

function displayServiceFaison(info){
    const allServ = document.getElementById("glb-servc");
    allServ.innerHTML = info.map((item)=>{
        return `<div class="bg-[#E8D3BE] w-72 h-56 rounded-lg">
        <h1 class="p-2 text-orange-700 font-medium text-2xl font-[lora]">${item.cardNumber}</h1>
        <p class="pl-2 font-semibold">${item.title}</p>
        <small class="pl-2 text-xs">${item.caption}</small>
        <article class="pl-2 font-light mt-2">${item.description}</article>
        </div>`

    })
    .join( ``);
}