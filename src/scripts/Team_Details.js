function AddReviews(event) {
    event.preventDefault();

    // Get values from the popup modal form
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const reviews = document.getElementById("reviews").value;
    const reviewsImg = document.getElementById("reviewsImg").files[0];

    // If there's an image, create an object URL for it
    let imageUrl = '';
    if (reviewsImg) {
        imageUrl = URL.createObjectURL(reviewsImg); // Create an object URL for the uploaded image
    }

    // Create the new review section dynamically
    const reviewSection = document.createElement("section");
    reviewSection.classList.add("flex", "items-center", "justify-center", "min-h-screen", "bg-gray-100");

    // Review content div
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("bg-white", "shadow-lg", "rounded-lg", "p-6", "max-w-xs", "text-center");

    // Rating icon section
    const ratingIcon = document.createElement("div");
    ratingIcon.classList.add("text-orange-500", "text-4xl");

    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("fill", "currentColor");
    svgIcon.setAttribute("class", "inline-block w-8 h-8");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    svgIcon.innerHTML = `<path d="M9 11.4c-.43-2.07.41-4.44 2.31-5.76 1.39-.97 3.05-1.2 4.44-.59 1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35-1.15 1.64-3.1 2.47-5.04 2.14a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05zM4 11.4c-.43-2.07.41-4.44 2.31-5.76C7.7 4.67 9.36 4.44 10.75 5.05c1.39.61 2.48 1.97 2.97 3.47.49 1.5.24 3.06-.68 4.35C11.89 14.51 9.94 15.34 8 15.01a4.495 4.495 0 0 1-3.74-3.61c-.06-.36-.14-.71-.26-1.05z"/>`;

    ratingIcon.appendChild(svgIcon);

    // Review text section
    const reviewText = document.createElement("p");
    reviewText.classList.add("text-gray-600", "italic", "mt-4");
    reviewText.textContent = reviews; 

    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("flex", "justify-center", "items-center", "mt-4", "space-x-1", "text-yellow-500");

    const ratingValue = document.createElement("p");
    ratingValue.textContent = rating;

    const starIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    starIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    starIcon.setAttribute("fill", "currentColor");
    starIcon.setAttribute("viewBox", "0 0 24 24");
    starIcon.setAttribute("class", "w-5 h-5");
    starIcon.innerHTML = `<path d="M12 17.3l-4.6 2.7 1.2-5.1-4-3.5 5.2-.4 2-4.9 2 4.9 5.2.4-4 3.5 1.2 5.1-4.6-2.7z"/>`;

    ratingContainer.appendChild(ratingValue);
    ratingContainer.appendChild(starIcon);

    const userInfo = document.createElement("div");
    userInfo.classList.add("mt-4");

    const userName = document.createElement("p");
    userName.classList.add("font-semibold");
    userName.textContent = `Mr. ${name}`;

    const userRole = document.createElement("p");
    userRole.classList.add("text-gray-500");
    userRole.textContent = "Customer"; 
    userInfo.appendChild(userName);
    userInfo.appendChild(userRole);

    // User's image section
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("mx-auto", "w-20", "h-20", "rounded-full", "overflow-hidden", "border-4", "border-white");

    const userImage = document.createElement("img");
    userImage.setAttribute("src", imageUrl || "https://via.placeholder.com/150"); // Placeholder if no image is uploaded
    userImage.setAttribute("alt", "Profile Image");
    userImage.classList.add("w-full", "h-full", "object-cover");

    imageContainer.appendChild(userImage);

    // Append everything to the review card
    reviewCard.appendChild(ratingIcon);
    reviewCard.appendChild(reviewText);
    reviewCard.appendChild(ratingContainer);
    reviewCard.appendChild(userInfo);
    reviewCard.appendChild(imageContainer);

    // Append the review card to the page
    reviewSection.appendChild(reviewCard);
    document.body.appendChild(reviewSection); // Or append to a specific container

    // Close the popup
    PopUp();

    // Optionally, clear the form fields after submitting
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("reviews").value = "";
    document.getElementById("reviewsImg").value = "";
}

// Call AddReviews when the form is submitted
