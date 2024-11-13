async function fetchData() {
  const response = await fetch("/src/data.json");

  try {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
        console.log(data);
    displayTeam(data.team);
    displayRiviews(data.team);
  } catch (error) {
    console.log("fetch API error", error);
  }
}

function displayTeam(teamInfo) {
    const teamContainer = document.getElementById("teamContainer");
  
    teamContainer.innerHTML = teamInfo
      .map((member) => {
        return `
          <section class="flex flex-col sm:flex-row justify-center items-center gap-4 bg-gray-100 w-full sm:w-auto max-w-xs mx-auto"
            onclick="displayId('${member.id}')">
            <div class="bg-green-200 rounded-lg shadow-lg text-center overflow-hidden p-6">
              <div class="bg-green-300 p-4">
                <h2 class="text-xl font-bold text-gray-800">${member.name}</h2>
                <p class="text-gray-600">${member.role}</p>
              </div>
              <div class="flex justify-center space-x-4 p-4 text-gray-600">
                <a href="${member.socialMedia.twitter || "#"}" class="hover:text-black" aria-label="Twitter">
                </a>
                <a href="${member.socialMedia.linkedin || "#"}" class="hover:text-black" aria-label="LinkedIn">
                </a>
                <a href="${member.socialMedia.github || "#"}" class="hover:text-black" aria-label="GitHub">
                </a>
              </div>
              <div class="pt-4">
                <img src="${member.image || "../assets/images/aamir-picture.jpg"}" alt="Profile" class="w-24 h-24 mx-auto">
              </div>
            </div>
          </section>`;
      })
      .join("");
  }
    function displayId(memberId) {
    localStorage.setItem("selectedMemberId", memberId);
    location.href = "/pages/Team_Details.html"; }
  

function displayRiviews(teamInfo) {
  const reviews = document.getElementById("reviews");

  reviews.innerHTML = teamInfo
    .map((item) => {
      return item.clientReviews
        .map((review) => {
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
        })
        .join("");
    })
    .join("");
}
function PopUp() {
  const modal = document.getElementById("popupModal");
  modal.classList.toggle("hidden");
}
// const ReviewsArr = [
//   {
//     name: "abdellah",
//     reviews: "Billing is done on a monthly basis based on your usage.",
//     Rating: 4.5,
//     imgReviews: "../assets/images/css.png",
//   },
//   {
//     name: "abde9ader",
//     reviews: "dsq is done on a monthly basis based on your usage.",
//     Rating: 4.5,
//     imgReviews: "../assets/images/facebook.png",
//   },
// ];

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
