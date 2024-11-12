      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });

      fetch("../src/data.json")
      .then((response) => response.json())
      .then((data) => displayProjects(data.projects));
    
    function displayProjects(info){
        const allProject = document.getElementById("pro");
        allProject.innerHTML = info.map((item)=>{
            return `<div class="border-orange-400 shadow-[#5dadec3b] shadow-xl mx-auto p-5 md:p-0 border rounded-2xl md:w-[450px] md:h-96 pd swiper-slide">
                <img src=${item.image} alt="" class="p-5 border rounded-lg w-full transition-all duration-300 cursor-pointer hover:scale-105">
                <p class="left-3 bg-orange-300 border rounded-lg text-center">${item.title}</p>
               </div>`
    
        })
        .join( ``);
    }

    fetch("../src/data.json")
      .then((response) => response.json())
      .then((data) => displayProjects(data.projects));
    
    function displayProjects(info){
        const allProject = document.getElementById("pro");
        allProject.innerHTML = info.map((item)=>{
            return `<div class="border-orange-400 shadow-[#5dadec3b] shadow-xl mx-auto p-5 md:p-0 border rounded-2xl md:w-[450px] md:h-96 pd swiper-slide">
                <img src=${item.image} alt="" class="p-5 border rounded-lg w-full transition-all duration-300 cursor-pointer hover:scale-105">
                <p class="left-3 bg-orange-300 border rounded-lg text-center">${item.title}</p>
               </div>`
    
        })
        .join( ``);
    }