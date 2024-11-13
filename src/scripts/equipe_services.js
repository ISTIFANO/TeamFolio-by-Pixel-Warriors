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



// baalla services header
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceBaallaheader(data.baallaservicehead));

function displayServiceBaallaheader(info){
    const baallaServiceheader = document.getElementById("baalla-services-header");
    baallaServiceheader.innerHTML = info.map((item)=>{
        return `<div class="shadow-md max-w-72 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl bg-[#F8E4D4]">
                    <figure>
                        <img src="${item.image}" alt="${item.name}" width="150" class="rounded-t-3xl">
                    </figure>
                    <h1 class="font-semibold pt-1 ml-1">${item.name}</h1>
                    <small class="text-xs font-light block ml-1">${item.role}</small>
                    <button class="bg-[#FFD6A2] pt-1 pb-1 pl-3 pr-3 font-light text-xs rounded-lg mt-5 mb-2 ml-1">Contacter</button>
                </div>`
    
    })

    const baallaServicequote = document.getElementById("baalla-services-quote");
    baallaServicequote.innerHTML = info.map((item)=>{
        return `<p class="font-semibold text-3xl ">${item.quote}</p>`
    })
     .join( ``);
}



// addar services header
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceaddarheader(data.addarservicehead));

function displayServiceaddarheader(info){
    const addarServiceheader = document.getElementById("addar-services-header");
    addarServiceheader.innerHTML = info.map((item)=>{
        return `<div class="shadow-md max-w-72 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl bg-[#F8E4D4]">
                    <figure>
                        <img src="${item.image}" alt="${item.name}" width="150" class="rounded-t-3xl">
                    </figure>
                    <h1 class="font-semibold pt-1 ml-1">${item.name}</h1>
                    <small class="text-xs font-light block ml-1">${item.role}</small>
                    <button class="bg-[#FFD6A2] pt-1 pb-1 pl-3 pr-3 font-light text-xs rounded-lg mt-5 mb-2 ml-1">Contacter</button>
                </div>`
    
    })

    const addarServicequote = document.getElementById("addar-services-quote");
    addarServicequote.innerHTML = info.map((item)=>{
        return `<p class="font-semibold text-3xl ">${item.quote}</p>`
    })
     .join( ``);
}


// aamir services header
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceaamirheader(data.aamirservicehead));

function displayServiceaamirheader(info){
    const aamirServiceheader = document.getElementById("aamir-services-header");
    aamirServiceheader.innerHTML = info.map((item)=>{
        return `<div class="shadow-md max-w-72 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl bg-[#F8E4D4]">
                    <figure>
                        <img src="${item.image}" alt="${item.name}" width="150" class="rounded-t-3xl">
                    </figure>
                    <h1 class="font-semibold pt-1 ml-1">${item.name}</h1>
                    <small class="text-xs font-light block ml-1">${item.role}</small>
                    <button class="bg-[#FFD6A2] pt-1 pb-1 pl-3 pr-3 font-light text-xs rounded-lg mt-5 mb-2 ml-1">Contacter</button>
                </div>`
    
    })

    const aamirServicequote = document.getElementById("aamir-services-quote");
    aamirServicequote.innerHTML = info.map((item)=>{
        return `<p class="font-semibold text-3xl ">${item.quote}</p>`
    })
     .join( ``);
}


// ilyass services header
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServiceilyassheader(data.ilyassservicehead));

function displayServiceilyassheader(info){
    const ilyassServiceheader = document.getElementById("ilyass-services-header");
    ilyassServiceheader.innerHTML = info.map((item)=>{
        return `<div class="shadow-md max-w-72 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl bg-[#F8E4D4]">
                    <figure>
                        <img src="${item.image}" alt="${item.name}" width="150" class="rounded-t-3xl">
                    </figure>
                    <h1 class="font-semibold pt-1 ml-1">${item.name}</h1>
                    <small class="text-xs font-light block ml-1">${item.role}</small>
                    <button class="bg-[#FFD6A2] pt-1 pb-1 pl-3 pr-3 font-light text-xs rounded-lg mt-5 mb-2 ml-1">Contacter</button>
                </div>`
    
    })

    const ilyassServicequote = document.getElementById("ilyass-services-quote");
    ilyassServicequote.innerHTML = info.map((item)=>{
        return `<p class="font-semibold text-3xl ">${item.quote}</p>`
    })
     .join( ``);
}


// baalla services pack
fetch("../src/data.json")
.then((response) => response.json())
.then((data) => displayServicebaallapack(data.servicepack));

function displayServicebaallapack(info){
    const baallaServicepack = document.getElementById("services-pack");
    baallaServicepack.innerHTML = info.map((item)=>{
        return `<div class="bg-[#F5E6D4] rounded pt-5 pl-2 pb-5 pr-2 w-full">
                    <h1 class="font-semibold text-lg">${item.title}</h1>
                    <h2 class="text-sm pb-5">${item.prix}MAD/MOIS</h2>
                    <p class="text-sm font-light pb-3">${item.description}</p>
                    <button class="bg-[#FFD6A2] pt-1 pb-1 pl-3 pr-3 rounded text-xs font-light">Souscrire</button>
                </div>`
    
    })
     .join( ``);
}


let toggle = document.getElementById("toggle-modal-btn");
toggle.addEventListener("click", function(){
   var crud = document.getElementById("crud-modal");
   crud.style = "display:block;"; 
});

let ajouterService = document.getElementById("ajouter-serv");
ajouterService.addEventListener("click", function(){
    const image_ser = document.getElementById("image-ser").files[0];
    let imageUrl = '';
    if (image_ser) {
        imageUrl = URL.createObjectURL(image_ser);
    }
    const title = document.getElementById("name").value;
    const prix = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const categorie = document.getElementById("category").value;
    const blkdiv = document.getElementById("baalla-services");
    blkdiv.insertAdjacentHTML("beforeend", `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${imageUrl}" alt="Service Image">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${title}</h1>
                    <p class="pl-1 text-xl">${prix}$</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1">${description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${categorie}</p>
                        </div>
                    </div>
                </div>`
        )
        
        document.getElementById("name").value = " "
        document.getElementById("price").value = " "
        document.getElementById("description").value = " "
        document.getElementById("category").value = "Selectioner la categorie"

});

let ajouterService2 = document.getElementById("ajouter-serv");
ajouterService2.addEventListener("click", function(){
    const image_ser = document.getElementById("image-ser").files[0];
    let imageUrl = '';
    if (image_ser) {
        imageUrl = URL.createObjectURL(image_ser);
    }
    const title = document.getElementById("name").value;
    const prix = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const categorie = document.getElementById("category").value;
    const blkdiv = document.getElementById("addar-services");
    blkdiv.insertAdjacentHTML("beforeend", `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${imageUrl}" alt="Service Image">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${title}</h1>
                    <p class="pl-1 text-xl">${prix}$</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1">${description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${categorie}</p>
                        </div>
                    </div>
                </div>`
        )
        
        document.getElementById("name").value = " "
        document.getElementById("price").value = " "
        document.getElementById("description").value = " "
        document.getElementById("category").value = "Selectioner la categorie"

});

let ajouterService3 = document.getElementById("ajouter-serv");
ajouterService3.addEventListener("click", function(){
    const image_ser = document.getElementById("image-ser").files[0];
    let imageUrl = '';
    if (image_ser) {
        imageUrl = URL.createObjectURL(image_ser);
    }
    const title = document.getElementById("name").value;
    const prix = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const categorie = document.getElementById("category").value;
    const blkdiv = document.getElementById("aamir-services");
    blkdiv.insertAdjacentHTML("beforeend", `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${imageUrl}" alt="Service Image">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${title}</h1>
                    <p class="pl-1 text-xl">${prix}$</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1">${description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${categorie}</p>
                        </div>
                    </div>
                </div>`
        )
        
        document.getElementById("name").value = " "
        document.getElementById("price").value = " "
        document.getElementById("description").value = " "
        document.getElementById("category").value = "Selectioner la categorie"

});

let ajouterService4 = document.getElementById("ajouter-serv");
ajouterService4.addEventListener("click", function(){
    const image_ser = document.getElementById("image-ser").files[0];
    let imageUrl = '';
    if (image_ser) {
        imageUrl = URL.createObjectURL(image_ser);
    }
    const title = document.getElementById("name").value;
    const prix = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const categorie = document.getElementById("category").value;
    const blkdiv = document.getElementById("ilyass-services");
    blkdiv.insertAdjacentHTML("beforeend", `<div class="border-2 border-black w-72">
                    <figure>
                        <img src="${imageUrl}" alt="Service Image">
                    </figure>
                    <h1 class="font-semibold pt-3 pl-1 text-2xl">${title}</h1>
                    <p class="pl-1 text-xl">${prix}$</p>
                    <h2 class="text-sm pl-1 font-medium">Description</h2>
                    <small class="text-xs font-light pl-1">${description}</small>
                    <div class="flex justify-around mt-5 mb-5">
                        <button class="bg-[#FFC57A] pt-1 pb-1 pr-3 pl-3 rounded text-xs font-light">Demander</button>
                        <div class="flex gap-1 items-center">
                            <p class="text-[10px] font-medium">Categorie: </p>
                            <p class="text-[10px]">${categorie}</p>
                        </div>
                    </div>
                </div>`
        )
        
        document.getElementById("name").value = " "
        document.getElementById("price").value = " "
        document.getElementById("description").value = " "
        document.getElementById("category").value = "Selectioner la categorie"

});


let closeBtn = document.getElementById("cancel-btn");
closeBtn.addEventListener("click", function(){
    const crud_modal = document.getElementById("crud-modal");
    crud_modal.style = "display: hidden";
});