const encounters = [
    "45-year-old with blurry vision OD x 2 weeks. No pain. History of diabetes.",
    "22-year-old contact lens wearer with red, irritated OS.",
    "67-year-old with sudden onset flashes and floaters.",
    "33-year-old with headaches and intermittent diplopia.",
    "70-year-old with gradual peripheral vision loss.",
    "15-year-old with itching, tearing, and papillae.",
    "55-year-old with progressive glare and difficulty driving at night."
];

document.getElementById("generateBtn").addEventListener("click", function() {
    const random = encounters[Math.floor(Math.random() * encounters.length)];

    document.getElementById("encounterText").innerText = random;
    document.getElementById("encounterBox").classList.remove("hidden");
});
