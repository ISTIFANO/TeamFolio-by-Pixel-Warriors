async function fetchData() {
    try {
      const response = await fetch("/src/data.json");
  
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
  
      const data = await response.json();
      console.log(data);
      displayProfile(data.team);
      displayReviews(data.testimonials);
    } catch (error) {
      console.log("fetch API error", error);
    }
  }
  
  
  
  function displayProfile(team) {
    const profileContainer = document.getElementById("profileContainer");
  
    const idL = localStorage.getItem("selectedMemberId");
  
    const Filters = team.filter(member => member.id == idL);

    // const NB = document.getElementById("teamCountContainer");
    // NB.textContent = `Number of team members with ID ${idL}: ${Filters.length}`;
    profileContainer.innerHTML = Filters.map((member) => {
      return `
        <div class="flex flex-col md:flex-row items-center mb-8">
          <div class="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden md:w-56 md:h-56">
            <img src="${member.image}" alt="${member.name}'s Profile Picture" class="object-cover w-full h-full">
          </div>
          
          <div class="flex flex-col gap-4 text-center md:text-left md:ml-8">
            <h2 class="text-lg font-semibold">${member.name}</h2>
            <p class="text-gray-600">${member.bio}</p>
            
            <h3 class="text-gray-800 font-medium">Role: ${member.role}</h3>
            <p class="text-gray-600 italic">${member.quote}</p>
            
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              ${Object.keys(member.socialMedia).map(platform => `
                <a href="${member.socialMedia[platform]}" target="_blank" class="text-blue-600 hover:underline">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
  

  function displayReviews(teamInfo) {
    const reviews = document.getElementById("reviewsS");
    reviews.innerHTML = teamInfo
      .map((testimonial) => {
        return `<section class="flex items-center justify-center  bg-gray-100">

                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center">
                        <div class="text-orange-500 text-4xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8" viewBox="0 0 24 24">
                                <path d="M9 11.4c-.43-2.07.41-4.44 2.31-5.76 1.39-.97 3.05-1.2 4.44-.59 1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35-1.15 1.64-3.1 2.47-5.04 2.14a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05zM4 11.4c-.43-2.07.41-4.44 2.31-5.76C7.7 4.67 9.36 4.44 10.75 5.05c1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35C11.89 14.51 9.94 15.34 8 15.01a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05z"/>
                            </svg>
                        </div>
                        <p class="text-gray-600 italic mt-4">
                            ${testimonial.message}
                        </p>
                        <div class="flex justify-center items-center mt-4 space-x-1 text-yellow-500">
                            <p>${testimonial.Rating}⭐</p>
                        </div>
                        <div class="mt-4">
                            <p class="font-semibold">${testimonial.clientName}</p>
                            <p class="text-gray-500">${testimonial.date}</p>
                        </div>
                    </div>
                </section>`;
      })
      .join("");
  }
  









  fetchData();