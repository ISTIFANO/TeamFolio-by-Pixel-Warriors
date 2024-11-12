// baalla services
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceBaalla(data.baallaServices));

function displayServiceBaalla(info){
    const baallaService = document.getElementById("baalla-services");
    baallaService.innerHTML = info.map((item)=>{
        return `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${item.image}" alt="service">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${item.title}</h1>
                    <p class="pl-1 text-xl">${item.prix} $</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1"> ${item.description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${item.categorie}</p>
                        </div>
                    </div>
                </div>`
    
    })
     .join( ``);
}


// addar services
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceAddar(data.addarServices));

function displayServiceAddar(info){
    const addarService = document.getElementById("addar-services");
    addarService.innerHTML = info.map((item)=>{
        return `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${item.image}" alt="service">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${item.title}</h1>
                    <p class="pl-1 text-xl">${item.prix} $</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1"> ${item.description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${item.categorie}</p>
                        </div>
                    </div>
                </div>`
    
    })
     .join( ``);
}


// aamir services
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceaamir(data.aamirServices));

function displayServiceaamir(info){
    const aamirService = document.getElementById("aamir-services");
    aamirService.innerHTML = info.map((item)=>{
        return `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${item.image}" alt="service">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${item.title}</h1>
                    <p class="pl-1 text-xl">${item.prix} $</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1"> ${item.description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 ml-1 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${item.categorie}</p>
                        </div>
                    </div>
                </div>`
    
    })
     .join( ``);
}


// ilyass Service
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceilyass(data.ilyassServices));

function displayServiceilyass(info){
    const ilyassService = document.getElementById("ilyass-services");
    ilyassService.innerHTML = info.map((item)=>{
        return `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${item.image}" alt="service">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${item.title}</h1>
                    <p class="pl-1 text-xl">${item.prix} $</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1"> ${item.description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 ml-1 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${item.categorie}</p>
                        </div>
                    </div>
                </div>`
    
    })
     .join( ``);
}