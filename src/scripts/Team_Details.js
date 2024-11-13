async function fetchData() {
    try {
      const response = await fetch("/src/data.json");
  
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
  
      const data = await response.json();
      console.log(data);
      
      displayProfile(data.team);
    } catch (error) {
      console.log("fetch API error", error);
    }
  }
  
  fetchData();
  
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
  