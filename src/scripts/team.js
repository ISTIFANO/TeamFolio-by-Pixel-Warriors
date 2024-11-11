
async function fetchData() {
    const response = await fetch('/src/data.json');

    try {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayTeam(data.team); 
        displayRiviews(data.team);
    } catch (error) {
        console.log('fetch API error', error);
    }
}

function displayTeam(teamInfo) {
    const teamContainer = document.getElementById("teamContainer");
    
    teamContainer.innerHTML = teamInfo.map(member => {
        return `
            <section class="flex flex-col sm:flex-row justify-center items-center gap-4 bg-gray-100 w-full sm:w-auto max-w-xs mx-auto">
                <div class="bg-green-200 rounded-lg shadow-lg text-center overflow-hidden p-6">
                    <div class="bg-green-300 p-4">
                        <h2 class="text-xl font-bold text-gray-800">${member.name}</h2>
                        <p class="text-gray-600">${member.role}</p>
                    </div>
                    <div class="flex justify-center space-x-4 p-4 text-gray-600">
                        <a href="${member.socialMedia.twitter || '#'}" class="hover:text-black" aria-label="Twitter">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M24 4.557a9.837 9.837 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.921 4.921 0 0 0-8.379 4.482A13.957 13.957 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.3v.062a4.926 4.926 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.212.084 4.93 4.93 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.004-.426-.014-.637A10.002 10.002 0 0 0 24 4.557z" />
                    </svg>                        </a>
                        <a href="${member.socialMedia.linkedin || '#'}" class="hover:text-black" aria-label="LinkedIn">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.111 19.65H3.814V8.757h3.297v10.893zm-1.647-12.4c-1.059 0-1.92-.856-1.92-1.91 0-1.055.86-1.912 1.92-1.912s1.919.857 1.919 1.912c0 1.054-.86 1.91-1.92 1.91zM20.35 19.65h-3.293v-5.521c0-1.313-.027-3.006-1.83-3.006-1.83 0-2.11 1.428-2.11 2.903v5.624h-3.297V8.757h3.168v1.493h.043c.44-.83 1.516-1.706 3.123-1.706 3.338 0 3.953 2.195 3.953 5.05v6.056z" />
                    </svg>                        </a>
                        <a href="${member.socialMedia.github || '#'}" class="hover:text-black" aria-label="GitHub">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.04-.017-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.761-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.381 1.235-3.22-.123-.305-.535-1.528.117-3.184 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.291-1.554 3.297-1.23 3.297-1.23.653 1.656.242 2.88.12 3.184.77.839 1.232 1.91 1.232 3.22 0 4.61-2.803 5.623-5.474 5.92.429.37.813 1.102.813 2.222 0 1.604-.015 2.898-.015 3.293 0 .32.217.694.825.576C20.565 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>                        </a>
                    </div>
                    <div class="pt-4">
                        <img src="${member.image || '../assests/images/aamir-picture.jpg'}" alt="Profile" class="w-24 h-24 mx-auto  ">
                    </div>
                </div>
            </section>`;
    }).join(""); 
}

function displayRiviews(teamInfo) {
    const reviews = document.getElementById("reviews");

    reviews.innerHTML = teamInfo.map(item => {
        return item.clientReviews.map(review => {
            return `<section class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center">
                    <div class="text-orange-500 text-4xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8" viewBox="0 0 24 24">
                            <path d="M9 11.4c-.43-2.07.41-4.44 2.31-5.76 1.39-.97 3.05-1.2 4.44-.59 1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35-1.15 1.64-3.1 2.47-5.04 2.14a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05zM4 11.4c-.43-2.07.41-4.44 2.31-5.76C7.7 4.67 9.36 4.44 10.75 5.05c1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35C11.89 14.51 9.94 15.34 8 15.01a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05z"/>
                        </svg>
                    </div>
                    <p class="text-gray-600 italic mt-4">
                        ${review.comment}
                    </p>
                    <div class="flex justify-center items-center mt-4 space-x-1 text-yellow-500">
                        <p>${review.rating}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                            <path d="M12 17.3l-4.6 2.7 1.2-5.1-4-3.5 5.2-.4 2-4.9 2 4.9 5.2.4-4 3.5 1.2 5.1-4.6-2.7z"/>
                        </svg>
                    </div>
                    <div class="mt-4">
                        <p class="font-semibold">Mr. ${item.name}</p>
                        <p class="text-gray-500">${item.role}</p>
                    </div>
                    <div class=" mx-auto w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                        <img src="${item.image}" alt="Profile Image" class="w-full h-full object-cover">
                    </div>
                </div>
            </section>`;
        }).join("");
    }).join("");
}

function PopUp() {
    const modal = document.getElementById('popupModal');
    modal.classList.toggle('hidden');
  }

    

fetchData();
