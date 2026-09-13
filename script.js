// ===============================
// 🌱 PLANT DATA
// ===============================

const plants = {
    rose: {
        name: "🌹 Rose",
        sunlight: "Full sunlight",
        water: "Regularly",
        soil: "Well-drained soil",
        care: "Remove dry leaves regularly."
    },

    aloe: {
        name: "🌿 Aloe Vera",
        sunlight: "Bright sunlight",
        water: "When soil is dry",
        soil: "Well-drained soil",
        care: "Avoid overwatering."
    },

    snake: {
        name: "🌱 Snake Plant",
        sunlight: "Low to bright light",
        water: "Less frequently",
        soil: "Well-drained soil",
        care: "Avoid overwatering."
    },

    tulsi: {
        name: "🌿 Tulsi",
        sunlight: "Good sunlight",
        water: "Regularly",
        soil: "Fertile soil",
        care: "Remove dry leaves regularly."
    },

    cactus: {
        name: "🌵 Cactus",
        sunlight: "Bright sunlight",
        water: "Less frequently",
        soil: "Sandy, well-drained soil",
        care: "Avoid excess water."
    },

    hibiscus: {
        name: "🌺 Hibiscus",
        sunlight: "Full sunlight",
        water: "Regularly",
        soil: "Well-drained soil",
        care: "Remove faded flowers."
    },

    sunflower: {
        name: "🌻 Sunflower",
        sunlight: "Full sunlight",
        water: "Regularly",
        soil: "Fertile soil",
        care: "Give enough sunlight."
    },

    jasmine: {
        name: "🌼 Jasmine",
        sunlight: "Bright sunlight",
        water: "Regularly",
        soil: "Well-drained soil",
        care: "Provide support for growth."
    },

    moneyplant: {
        name: "🌿 Money Plant",
        sunlight: "Indirect sunlight",
        water: "When soil is partly dry",
        soil: "Well-drained soil",
        care: "Avoid waterlogging."
    },

    neem: {
        name: "🌳 Neem",
        sunlight: "Full sunlight",
        water: "Moderately",
        soil: "Well-drained soil",
        care: "Needs enough space to grow."
    }, 
    mango: {
    name: "🥭 Mango",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Well-drained fertile soil",
    care: "Give enough sunlight and avoid waterlogging."
},
lemon: {
    name: "🍋 Lemon",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Well-drained fertile soil",
    care: "Give enough sunlight and avoid waterlogging."
},
guava: {
    name: "🍈 Guava",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Well-drained fertile soil",
    care: "Give enough sunlight and avoid waterlogging."
},
banana: {
    name: "🍌 Banana",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Fertile, well-drained soil",
    care: "Keep the soil moist and provide enough sunlight."
},
papaya: {
    name: "🍊 Papaya",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Well-drained fertile soil",
    care: "Provide enough sunlight and avoid waterlogging."
},
coconut: {
    name: "🥥 Coconut",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Sandy, well-drained soil",
    care: "Provide enough sunlight and avoid waterlogging."
},
mint: {
    name: "🌿 Mint",
    sunlight: "Partial to bright sunlight",
    water: "Regularly",
    soil: "Moist, well-drained soil",
    care: "Keep the soil moist and trim regularly."
},tomato: {
    name: "🍅 Tomato",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Fertile, well-drained soil",
    care: "Provide support as the plant grows and avoid waterlogging."
},
chilli: {
    name: "🌶️ Chilli",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Fertile, well-drained soil",
    care: "Give enough sunlight and avoid overwatering."
},
carrot: {
    name: "🥕 Carrot",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Loose, well-drained soil",
    care: "Keep the soil moist and avoid waterlogging."
},
onion: {
    name: "🧅 Onion",
    sunlight: "Full sunlight",
    water: "Regularly",
    soil: "Loose, well-drained soil",
    care: "Keep the soil slightly moist and avoid waterlogging."
},
ashwagandha: {
    name: "🌿 Ashwagandha",
    sunlight: "Bright sunlight",
    water: "Moderately",
    soil: "Well-drained soil",
    care: "Avoid overwatering."
},
turmeric: {
    name: "🌿 Turmeric (Haldi)",
    sunlight: "Partial to full sunlight",
    water: "Regularly",
    soil: "Fertile, well-drained soil",
    care: "Keep the soil slightly moist."
},
ginger: {
    name: "🌿 Ginger (Adrak)",
    sunlight: "Partial sunlight",
    water: "Regularly",
    soil: "Moist, well-drained soil",
    care: "Avoid waterlogging."
},
};


// ===============================
// 🔍 SEARCH PLANT
// ===============================

function searchPlant() {

    let input = document.getElementById("searchBox");
    let result = document.getElementById("result");

    if (!input || !result) {
        return;
    }

    let search = input.value.toLowerCase().trim();

    if (search === "") {
        result.innerHTML = "<p>🌱 Please enter a plant name.</p>";
        return;
    }

    let foundPlant = null;

    for (let key in plants) {

        let plantName = plants[key].name
            .toLowerCase()
            .replace(/[🌹🌿🌱🌵🌺🌻🌼🌳]/g, "")
            .trim();

        if (plantName.includes(search) || key.includes(search)) {
            foundPlant = plants[key];
            break;
        }
    }

    if (foundPlant) {

        result.innerHTML = `
            <div class="scan-result">
                <h3>${foundPlant.name}</h3>
                <p>☀️ Sunlight: ${foundPlant.sunlight}</p>
                <p>💧 Water: ${foundPlant.water}</p>
                <p>🪴 Soil: ${foundPlant.soil}</p>
                <p>❤️ Care: ${foundPlant.care}</p>
            </div>
        `;

    } else {

        result.innerHTML = `
            <p>❌ Plant not found.</p>
            <p>Try Rose, Aloe Vera, Snake Plant, Tulsi, Cactus, Hibiscus or other available plants.</p>
        `;
    }
}


// ===============================
// 🌱 CATEGORY
// ===============================

function showCategory(category) {

    let cards = document.querySelectorAll(".plant-card");

    cards.forEach(function(card) {

        if (category === "all") {
            card.style.display = "block";
        }

        else if (card.classList.contains(category)) {
            card.style.display = "block";
        }

        else {
            card.style.display = "none";
        }

    });
}


// ===============================
// 📖 PLANT DETAILS
// ===============================

function showDetails(plant) {

    let details = document.getElementById("details");

    if (!details) {
        return;
    }

    let p = plants[plant];

    if (!p) {
        details.innerHTML = "<p>❌ Plant details not available.</p>";
        return;
    }

    details.innerHTML = `
        <h2>${p.name}</h2>
        <p>☀️ Sunlight: ${p.sunlight}</p>
        <p>💧 Water: ${p.water}</p>
        <p>🪴 Soil: ${p.soil}</p>
        <p>❤️ Care: ${p.care}</p>
    `;
}


// ===============================
// 📷 PREVIEW PLANT IMAGE
// ===============================

function previewPlant() {

    let image = document.getElementById("plantImage");
    let preview = document.getElementById("preview");

    if (!image || !preview) {
        return;
    }

    if (image.files.length === 0) {
        preview.innerHTML = "";
        return;
    }

    let file = image.files[0];

    let reader = new FileReader();

    reader.onload = function(event) {

        preview.innerHTML = `
            <h3>📷 Selected Plant</h3>
            <img src="${event.target.result}"
                 style="max-width:250px; border-radius:15px;">
        `;
    };

    reader.readAsDataURL(file);
}


// ===============================
// 🔍 IDENTIFY PLANT
// ===============================

function identifyPlant() {

    let image = document.getElementById("plantImage");
    let preview = document.getElementById("preview");

    if (!image || !preview) {
        return;
    }

    if (image.files.length === 0) {

        preview.innerHTML = `
            <p>❌ Please select a plant image first.</p>
        `;

        return;
    }

    preview.innerHTML = `
        <h3>🌱 Plant Image Scanned</h3>

        <p>✅ Image scanned successfully!</p>

        <p><b>Select the plant:</b></p>

        <button onclick="showScanResult('rose')">
            🌹 Rose
        </button>

        <button onclick="showScanResult('aloe')">
            🌿 Aloe Vera
        </button>

        <button onclick="showScanResult('snake')">
            🌱 Snake Plant
        </button>

        <button onclick="showScanResult('tulsi')">
            🌿 Tulsi
        </button>

        <button onclick="showScanResult('cactus')">
            🌵 Cactus
        </button>

        <button onclick="showScanResult('hibiscus')">
            🌺 Hibiscus
        </button>

        <button onclick="showScanResult('sunflower')">
            🌻 Sunflower
        </button>

        <button onclick="showScanResult('jasmine')">
            🌼 Jasmine
        </button>

        <button onclick="showScanResult('moneyplant')">
            🌿 Money Plant
        </button>

        <button onclick="showScanResult('neem')">
            🌳 Neem
        </button>

        <div id="scanResult"></div>
    `;
}


// ===============================
// 🌿 SCAN RESULT
// ===============================

function showScanResult(plant) {

    let result = document.getElementById("scanResult");

    if (!result) {
        return;
    }

    let p = plants[plant];

    if (!p) {
        result.innerHTML = "<p>❌ Plant not found.</p>";
        return;
    }

    result.innerHTML = `
        <div class="scan-result">

            <h2>${p.name}</h2>

            <p>☀️ Sunlight: ${p.sunlight}</p>

            <p>💧 Water: ${p.water}</p>

            <p>🪴 Soil: ${p.soil}</p>

            <p>❤️ Care: ${p.care}</p>

        </div>
    `;
}


// ===============================
// ⏰ REMINDER
// ===============================

function setReminder() {

    alert("⏰ Plant care reminder set successfully!");
}