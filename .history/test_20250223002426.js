// Testimonials Data
const testimonials = [
    {
      name: "Ali Raza Sheikh",
      image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: "ISDP ka kaam dekh kar mujhe yaqeen ho gaya ke ye sirf aik NGO nahi, balki ek behtareen mission hai jo Pakistan ki taraqqi mein madad kar raha hai!",
      rating: 5,
    },
    {
      name: "Sana Ahmed",
      image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: "Mujhe fakhar hai ke main ISDP ki supporter hoon. Unka kaam sirf relief dena nahi balki logon ko khud-mukhtar banana hai!",
      rating: 5,
    },
    {
      name: "Bilal Khan",
      image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: "Jab main ne ISDP ke projects dekhe toh samajh aya ke ye sach mein aik game changer hai jo gareebon ke liye real opportunities create kar raha hai.",
      rating: 5,
    },
    {
      name: "Ayesha Malik",
      image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: "Main ne bohot NGOs ke sath kaam kiya hai lekin ISDP jaisa professionalism aur dedication kahin nahi dekha!",
      rating: 5,
    },
    {
      name: "Hassan Javed",
      image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      text: "Invest karna sirf paisa lagana nahi, balki aik behtareen mission ka hissa banna hai. ISDP is truly making an impact!",
      rating: 5,
    },
];

let current = 0;

// DOM Elements
const testimonialImage = document.getElementById("testimonial-image");
const testimonialName = document.getElementById("testimonial-name"); // New element for client name
const testimonialText = document.getElementById("testimonial-text");
const starsContainer = document.getElementById("stars-container");
const dotsContainer = document.getElementById("dots-container");

const prevMobileBtn = document.getElementById("prev-mobile");
const nextMobileBtn = document.getElementById("next-mobile");
const prevDesktopBtn = document.getElementById("prev-desktop");
const nextDesktopBtn = document.getElementById("next-desktop");

// Initialize
function init() {
    renderTestimonial();
    createDots();
    updateDots();
    renderStars();

    // Event Listeners
    prevMobileBtn.addEventListener("click", handlePrev);
    nextMobileBtn.addEventListener("click", handleNext);
    prevDesktopBtn.addEventListener("click", handlePrev);
    nextDesktopBtn.addEventListener("click", handleNext);
}

// Render the testimonial content
function renderTestimonial() {
    testimonialImage.src = testimonials[current].image;
    testimonialName.textContent = testimonials[current].name; // Set the client name
    testimonialText.textContent = testimonials[current].text;
    renderStars();
    updateDots();
}

// Create dots
function createDots() {
    dotsContainer.innerHTML = "";
    testimonials.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.style.width = "16px";
        dot.style.height = "16px";
        dot.style.borderRadius = "50%";
        dot.style.cursor = "pointer";
        dot.style.transition = "all 0.3s";
        dot.addEventListener("click", () => {
            current = index;
            renderTestimonial();
        });
        dotsContainer.appendChild(dot);
    });
}

// Update dots based on current
function updateDots() {
    [...dotsContainer.children].forEach((dot, index) => {
        dot.style.backgroundColor = current === index ? "#F85E9F" : "#d1d5db";
    });
}

// Render stars
function renderStars() {
    starsContainer.innerHTML = "";
    const starCount = testimonials[current].rating;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span");
        star.textContent = "★";
        star.style.color = "#fbbf24";
        star.style.fontSize = "2rem";
        starsContainer.appendChild(star);
    }
}

// Next
function handleNext() {
    current = current === testimonials.length - 1 ? 0 : current + 1;
    renderTestimonial();
}

// Prev
function handlePrev() {
    current = current === 0 ? testimonials.length - 1 : current - 1;
    renderTestimonial();
}

// Start
init();
