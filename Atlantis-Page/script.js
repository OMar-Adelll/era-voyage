document.querySelector(".explore-btn").addEventListener("click", () => {
    document.querySelector(".intro-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.querySelectorAll(".card").forEach((card, i) => {
    card.addEventListener("click", () => {
        document.getElementById(`popup${i+1}`).style.display = "flex";
    });
});

document.querySelectorAll(".close").forEach(btn => {
    btn.onclick = () => {
        btn.closest(".popup").style.display = "none";
    };
});

function toggleAudio(icon) {
    const audio = document.getElementById("brief-audio");

    if (audio.paused) {
        audio.play();
        icon.textContent = "⏹";
    } else {
        audio.pause();
        icon.textContent = "🕪";
    }
}


const popupData = {
    "Atlantis Temple": {
        title: "Atlantis Temple",
        img: "Media/temple.jpeg",
        description: "Ancient underwater temple filled with lost secrets.",
        details: "This temple is believed to be the spiritual center of Atlantis civilization where ancient ceremonies were performed.",
        facts: [
            "Built thousands of years ago",
            "Located deep under the ocean",
            "Made of unknown glowing stone"
        ]
    },

    "Crystal Garden": {
        title: "Crystal Garden",
        img: "Media/crystal.jpeg",
        description: "Glowing crystals under the ocean.",
        details: "A magical place filled with luminous crystals that light up the deep sea environment.",
        facts: [
            "Crystals emit natural light",
            "Home to rare sea plants",
            "Changes color with water currents"
        ]
    },

    "Ocean Ruins": {
        title: "Ocean Ruins",
        img: "Media/ocean-ruins.jpeg",
        description: "Broken ancient structures under the sea.",
        details: "These ruins represent the remains of collapsed Atlantean architecture lost after the sinking.",
        facts: [
            "Discovered by deep divers",
            "Structures still standing after centuries",
            "Covered in coral reefs"
        ]
    },

    "Lost City Core": {
        title: "Lost City Core",
        img: "Media/lost-city.jpeg",
        description: "The hidden energy center of Atlantis.",
        details: "It is believed to be the core that powered the entire Atlantis civilization using unknown energy sources.",
        facts: [
            "Unknown energy source",
            "Highly protected area",
            "Center of Atlantis power system"
        ]
    }
};

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector(".card-title").textContent.trim();

        const data = popupData[title];

        document.getElementById("popup-title").textContent = data.title;
        document.getElementById("popup-img").src = data.img;

        document.getElementById("popup-text").innerHTML = `
            <p>${data.description}</p>
            <p>${data.details}</p>
            <ul>
                ${data.facts.map(f => `<li>${f}</li>`).join("")}
            </ul>
        `;

        document.getElementById("popup").style.display = "flex";
    });
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}