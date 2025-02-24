/* 
  Create an array of cards, each with:
   - image path
   - title
   - description
   - link 
   (Add as many as you want!)
*/
const cardsData = [
    {
      title: "PROJECT SUDHAAR",
      description: "We conduct medical camps for underprivileged communities, particularly the disabled, orphans, and the elderly.",
      image: "uuu.png",
      link: "https://swd.vit.edu/flagship/rr/rr.html"
    },
    {
      title: "PROJECT GYAAN",
      description: "Our student volunteers go to schools and teach students using creative methods, improving resources for academic development.",
      image: "uuu.png",
      link: "https://swd.vit.edu/flagship/utkrash/utkarsh.html"
    },
    {
      title: "PROJECT NIRMAAN",
      description: "Nirmaan focuses on skill-based learning. We build kits, set up donation boxes in our fests, so underprivileged people can benefit.",
      image: "uuu.png",
      link: "https://youtu.be/9xoo9GvsK5o?list=TLGGZyE3b9VU8G8yNDAyMjAyNA"
    },
    {
      title: "PROJECT GO GREEN",
      description: "We actively engage in tree plantation drives, workshops on waste management, and energy conservation campaigns.",
      image: "uuu.png",
      link: "https://youtu.be/eifgT3ustW0?list=TLGGYDK2KB_YQJMyNDAyMjAyNA"
    },
    {
      title: "PROJECT MUSKAAN",
      description: "This project aims to spread smiles through social drives and blood donation camps, benefiting the local community.",
      image: "uuu.png",
      link: "https://swd.vit.edu/flagship/blood-d/blood.html"
    },
    {
      title: "PROJECT AATMABODH",
      description: "An initiative to spread awareness about mental health and self-care for the youth, focusing on holistic wellbeing.",
      image: "uuu.png",
      link: "https://swd.vit.edu/flagship/aatmabodh/aatmabodh.html"
    }
  ];
  
  /* 
    We will place each card in a "circular" 3D arrangement.
    The middle card is the "active" one, 
    the left and right cards are slightly behind it, etc.
  */
  let currentIndex = 0;
  const track = document.querySelector(".carousel-track");
  const totalCards = cardsData.length;
  
  // Create and append card elements
  const cardElements = cardsData.map((card, i) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "carousel-card";
  
    const imgTag = document.createElement("img");
    imgTag.src = card.image;
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "card-content";
  
    const h2Tag = document.createElement("h2");
    h2Tag.textContent = card.title;
  
    const pTag = document.createElement("p");
    pTag.textContent = card.description;
  
    contentDiv.appendChild(h2Tag);
    contentDiv.appendChild(pTag);
  
    cardDiv.appendChild(imgTag);
    cardDiv.appendChild(contentDiv);
  
    // onClick -> open link in new tab
    cardDiv.onclick = () => {
      window.open(card.link, "_blank");
    };
  
    track.appendChild(cardDiv);
    return cardDiv;
  });
  
  function updateCarousel() {
    /* 
       We want the "currentIndex" card to be in front (z-index or transform).
       Cards behind to the left and right get transformations 
       so they appear smaller and behind the center.
    */
    const middle = Math.floor(totalCards / 2);
  
    for (let i = 0; i < totalCards; i++) {
      const cardEl = cardElements[i];
  
      // how many positions away from the current card?
      let offset = i - currentIndex;
  
      // if offset is too large (e.g. > middle), wrap around
      if (offset < -middle) {
        offset += totalCards;
      }
      if (offset > middle) {
        offset -= totalCards;
      }
  
      // transform each card based on offset
      const distance = Math.abs(offset);
      const scale = 1 - distance * 0.1; // smaller for those further away
      const translateX = offset * 400;  // shift horizontally
      const rotateY = offset * 30;      // rotate for a 3D effect
      const zIndex = -distance;         // center has highest zIndex
  
      cardEl.style.transform = `
        translateX(${translateX}px)
        scale(${scale})
        perspective(1000px)
        rotateY(${rotateY}deg)
      `;
      cardEl.style.zIndex = zIndex;
      cardEl.style.opacity = distance > 2 ? 0 : 1; 
      // hide if it's too far
    }
  }
  
  // Initialize the carousel
  updateCarousel();
  
  // Arrow events
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  });
  