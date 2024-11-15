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
            return `<div class="border-blue-100 shadow-[#5dadec3b] shadow-xl mx-auto p-5 md:p-0 border rounded-2xl md:w-[450px] md:h-96 pd swiper-slide">
                <a href=${item.lien}> <img src=${item.image} alt="" class="p-5 border rounded-lg w-full transition-all duration-300 cursor-pointer hover:scale-105"> </a>
                <p class="left-3 bg-blue-100 border rounded-lg text-center">${item.title}</p>
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
          <div class="mt-5 overflow-auto md:overflow-scroll mySwiper swiper-container">
            <div id="views" class="swiper-wrapper">
              <div class="px-3 py-8 swiper-slide">
                ${imageUrl ? `
                  <div class="mx-auto w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                      <img src="${imageUrl}" alt="Profile Image" class="w-full h-full object-cover">
                  </div>
              ` : ''}
                <p class="my-5 px-2 text-justify text-sm fa-align-center">
                ${reviews}
                </p>
                <h5 class="mb-2">${name}</h5>
                <p class="px-2 text-sm">${rating}</p>
              </div>
              
            </div>
            
          </div>
      `;
      ReviewsSection.appendChild(reviewCard);
      document.getElementById("name").value = '';
      document.getElementById("rating").value = '';
      document.getElementById("reviews").value = '';
      document.getElementById("reviewsImg").value = '';
  }
  
  document.getElementById("submit").addEventListener("click", AddReviews);
  
  
  

  
  let toggle = document.getElementById("toggle-modal-btn");
  toggle.addEventListener("click", function(){
    var crud = document.getElementById("crud-modal");
    crud.style = "display:block;";
  });



  var cont = 3;
  var cint = 1;

  let ajouterProject = document.getElementById("ajouter-project");
  ajouterProject.addEventListener("click", function(){
      const image_project = document.getElementById("image-project").files[0];
      let imageUrl = '';
      if (image_project) {
          imageUrl = URL.createObjectURL(image_project);
      }
      
      const lien_project = document.getElementById("lien-project").value;
      const titre = document.getElementById("titre").value;
      const description = document.getElementById("description").value;
      
      const blkdiv = document.getElementById("new-project");
      blkdiv.insertAdjacentHTML("beforeend", `<div id="${cont - 1} class="flex md:flex-row flex-col justify-between items-center gap-8 my-20 mt-5 md:overflow-scroll overflow-x-scroll mySwiper swiper-container">
            <div id="pro" class="swiper-wrapper">
               <div class="border-blue-100 shadow-[#5dadec3b] shadow-xl mx-auto p-5 md:p-0 border rounded-2xl md:w-[450px] md:h-96 pd swiper-slide">
                <a href="${lien_project}"><img src="${imageUrl}" alt="" class="p-5 border rounded-lg w-full transition-all duration-300 cursor-pointer hover:scale-105"></a>
                <p class="left-3 bg-blue-100 border rounded-lg text-center">${titre}</p>
                <p class="left-3 bg-blue-100 border rounded-lg text-center">${description}</p>
               </div>
               
            </div>
        </div>`
          )
          document.getElementById("lien_project").value = " "
          document.getElementById("titre").value = " "
          document.getElementById("description").value = " "
          document.getElementById("image-project").value = '';
          cont = cont +1;

       
  });





















  let closeBtn = document.getElementById("cancel-btn");
closeBtn.addEventListener("click", function(){
    const crud_modal = document.getElementById("crud-modal");
    crud_modal.style = "display: hidden";
});

// The function of delete an card service
function supprifunc(event) {
    const elementToRemove = event.target.closest('.border-2.border-black.w-72');
    if (elementToRemove) {
      elementToRemove.remove();
    } else {
      console.error("Element to remove not found");
    }
  }

//The function of update
  function modifierinfo(event) {
    const project = event.target.closest('.border-2.border-black.w-72');
    const oldTitle = project.querySelector('h1').textContent;
    const oldDescription = project.querySelector('small').textContent;
  
    project.querySelector('h1').innerHTML = `<input type="text" value="${oldTitle}">`;
    project.querySelector('small').innerHTML = `<textarea>${oldDescription}</textarea>`;
  
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    project.appendChild(saveButton);
  
    saveButton.addEventListener('click', () => {
      project.querySelector('h1').textContent = project.querySelector('input').value;
      project.querySelector('p').textContent = project.querySelector('input').value;
      project.querySelector('small').textContent = project.querySelector('textarea').value;
      saveButton.remove();
    });
  }
