let tabs= document.querySelectorAll('.tab');
let indicator = document.querySelector(".indicator")  ;

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";    

tabs.forEach((tab) => {
  tab.addEventListener("click", ()=> {
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left = tab.getBoundingClientRect().left - tabs.parentElement.getBoundingClientRect().left + "px"; 
  })
})
      
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
      .then((data) => displayViews(data.testimonials));
    
    function displayViews(info){
        const allViews = document.getElementById("views");
        allViews.innerHTML = info.map((item)=>{
            return `<div class="px-3 py-8 swiper-slide">
                <img src=${item.image} alt="" class="image">
                <p class="my-5 px-2 text-center text-sm fa-align-center">
                    ${item.message}
                </p>
                <h5 class="mb-2">${item.clientName}</h5>
                <p class="px-2 text-sm">${item.date}</p>
              </div>`
    
        })
        .join( ``);
    }

    function PopUp() {
      const modal = document.getElementById("popupModal");
      modal.classList.toggle("hidden");
    }
    function ValidationInput() {
      const name = document.getElementById("name");
      const rating = document.getElementById("rating");
      const reviews = document.getElementById("reviews");
    
      let nameRegex = /^[A-Za-z]+$/; 
      let ratingRegex = /^[1-9]{1}$/; 
      let valid = true; 
    
      switch (true) {
        case nameRegex.test(reviews.value):
          
          break;
        default:
          valid = false;
      }
      switch (true) {
        case nameRegex.test(name.value):
          break;
        default:
          valid = false;
      }
      switch (true) {
        case ratingRegex.test(rating.value):
          break;
        default:
          valid = false;
      }
      if (!valid) {
      } else {
        alert("All inputs are valid."); 
      }
    
      return valid;
    }
    function AddReviews(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const rating = document.getElementById("rating").value;
      const reviews = document.getElementById("reviews").value;
      const reviewsImg = document.getElementById("reviewsImg").files[0];
  
      // The section where the reviews will be appended
      const ReviewsSection = document.getElementById("reviewsFromPopUp");
  
      let imageUrl = '';
      if (reviewsImg) {
          imageUrl = URL.createObjectURL(reviewsImg);
      }
  
      const reviewCard = document.createElement('section');
      reviewCard.classList.add("flex", "items-center", "justify-center", "h-76", "w-[200px]", "bg-gray-100", "mb-4", "mr-4");
  
      reviewCard.innerHTML = `
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <div class="text-orange-500 text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8" viewBox="0 0 24 24">
                      <path d="M9 11.4c-.43-2.07.41-4.44 2.31-5.76 1.39-.97 3.05-1.2 4.44-.59 1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35-1.15 1.64-3.1 2.47-5.04 2.14a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05zM4 11.4c-.43-2.07.41-4.44 2.31-5.76C7.7 4.67 9.36 4.44 10.75 5.05c1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35C11.89 14.51 9.94 15.34 8 15.01a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05z"/>
                  </svg>
              </div>
              <p class="text-gray-600 italic mt-4">
                  ${reviews}
              </p>
              <div class="flex justify-center items-center mt-4 space-x-1 text-yellow-500">
                  <p>${rating}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                      <path d="M12 17.3l-4.6 2.7 1.2-5.1-4-3.5 5.2-.4 2-4.9 2 4.9 5.2.4-4 3.5 1.2 5.1-4.6-2.7z"/>
                  </svg>
              </div>
              <div class="mt-4">
                  <p class="font-semibold">Mr. ${name}</p>
              </div>
              ${imageUrl ? `
                  <div class="mx-auto w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <img src="${imageUrl}" alt="Profile Image" class="w-full h-full object-cover">
                  </div>
              ` : ''}
          </div>
      `;
      ReviewsSection.appendChild(reviewCard);
      document.getElementById("name").value = '';
      document.getElementById("rating").value = '';
      document.getElementById("reviews").value = '';
      document.getElementById("reviewsImg").value = '';
  }
  
  document.getElementById("submit").addEventListener("click", AddReviews);
  
  
  
  fetchData();
  