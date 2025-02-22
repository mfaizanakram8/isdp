// ISDP Services Data with Images
const services = [
    { 
        title: "Women Empowerment", 
        desc: "Helping women start their own businesses and learn new skills.",
        img: "https://media.licdn.com/dms/image/v2/C5612AQGbVHx_W1XpMw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1605094221947?e=2147483647&v=beta&t=SLO0PZU9KNYpyQVDbEiSr9vQF9QCSAID6-PDmIKRktY"
    },
    { 
        title: "Education & Literacy", 
        desc: "Providing educational resources for underserved communities.",
        img: "https://clubrunner.blob.core.windows.net/00000000214/Images/20050420_ni_009(1).jpg"
    },
    { 
        title: "Healthcare & Medical Camps", 
        desc: "Free medical check-ups and awareness programs.",
        img: "https://tuf.edu.pk/Main/frontend/images/NewsAndEvents/2022/1643111496.jpg"
    },
    { 
        title: "Clean Water Accessibility", 
        desc: "Installing water filtration plants in rural areas.",
        img: "https://www.unwater.org/sites/default/files/2022-10/screenshot_2022-10-24_at_10.15.42.png"
    },
    { 
        title: "Employment Generation", 
        desc: "Providing job opportunities through our USA-based project.",
        img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201911/1jobs_660x450_211119020425.jpg"
    },
    { 
        title: "Ramadhan Rashan Drive", 
        desc: "Distributing essential food supplies during Ramadan.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgI9taInMz5g6Y8CnGn2bH4GQxe0_ANFG7BQ&s"
    }
];

// Dynamically Load Services
const serviceList = document.getElementById("service-list");

services.forEach(service => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");
    serviceCard.innerHTML = `
        <img src="${service.img}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
    `;
    serviceList.appendChild(serviceCard);
});

// Copy Contact Number
document.getElementById("copy-btn").addEventListener("click", function () {
    let contactNumber = document.getElementById("contact-number").innerText;
    
    navigator.clipboard.writeText(contactNumber).then(() => {
        let copiedText = document.getElementById("copied-text");
        copiedText.classList.remove("hidden");

        setTimeout(() => {
            copiedText.classList.add("hidden");
        }, 2000);
    });
});
