// fetch and display data for services team
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

// fetch and display data for team member
fetch("../src/data.json")
  .then((response) => response.json())
  .then((data) => displaynotreTeam(data.team));

function displaynotreTeam(team){
    const notreteam = document.getElementById("notre-team");
    notreteam.innerHTML = team.map((item)=>{
        return `<div class="max-w-xs mx-auto bg-[#E8D3BE] rounded-lg shadow-lg text-center overflow-hidden ">
            <div class="bg-[#FFC57A] p-4 ">
                <h2 class="text-xl font-bold text-gray-800 ">${item.name}</h2>
                <p class="text-gray-600">${item.role}</p>
                <a href="${item.linkpg}"><button class="bg-[#FFC53A] py-1 px-5 rounded-lg mt-5">Acceder aux Services</button></a>
            </div>
            
            <div class="flex justify-center space-x-4 p-4 text-gray-600">
                <a href="${item.socialMedia.twitter}" class="hover:text-black" aria-label="Twitter" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M24 4.557a9.837 9.837 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.921 4.921 0 0 0-8.379 4.482A13.957 13.957 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.3v.062a4.926 4.926 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.212.084 4.93 4.93 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.004-.426-.014-.637A10.002 10.002 0 0 0 24 4.557z" />
                    </svg>
                </a>
                <a href="${item.socialMedia.linkedin}" class="hover:text-black" aria-label="LinkedIn" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.111 19.65H3.814V8.757h3.297v10.893zm-1.647-12.4c-1.059 0-1.92-.856-1.92-1.91 0-1.055.86-1.912 1.92-1.912s1.919.857 1.919 1.912c0 1.054-.86 1.91-1.92 1.91zM20.35 19.65h-3.293v-5.521c0-1.313-.027-3.006-1.83-3.006-1.83 0-2.11 1.428-2.11 2.903v5.624h-3.297V8.757h3.168v1.493h.043c.44-.83 1.516-1.706 3.123-1.706 3.338 0 3.953 2.195 3.953 5.05v6.056z" />
                    </svg>
                </a>
                <a href="${item.socialMedia.github}" class="hover:text-black" aria-label="GitHub" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.04-.017-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.761-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.381 1.235-3.22-.123-.305-.535-1.528.117-3.184 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.291-1.554 3.297-1.23 3.297-1.23.653 1.656.242 2.88.12 3.184.77.839 1.232 1.91 1.232 3.22 0 4.61-2.803 5.623-5.474 5.92.429.37.813 1.102.813 2.222 0 1.604-.015 2.898-.015 3.293 0 .32.217.694.825.576C20.565 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>

            </div>
            <div class="pt-10">
                <img src="${item.imagepng}" alt="Profile" class="w-24 h-24 mx-auto -mt-10 ">
            </div>
        </div>`

    })
    .join( ``);
}