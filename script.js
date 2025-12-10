// Sample patient encounter cases
const cases = [
    {
        chiefComplaint: "Blurry vision in right eye for 2 weeks",
        medicalHistory: "Type 2 diabetes, hypertension",
        familyHistory: "Mother has glaucoma, father has cataracts",
        patientResponses: {
            "Do you have pain?": "No pain, just blurry vision.",
            "Any flashes or floaters?": "No flashes or floaters.",
            "Do you wear contacts?": "No, I wear glasses.",
        }
    },
    {
        chiefComplaint: "Red, itchy left eye",
        medicalHistory: "Seasonal allergies, asthma",
        familyHistory: "Sister has allergic conjunctivitis",
        patientResponses: {
            "Do you have discharge?": "Yes, watery discharge.",
            "Any pain or vision loss?": "No pain, vision is fine.",
            "Do you have allergies?": "Yes, pollen allergies every spring."
        }
    },
    {
        chiefComplaint: "Gradual peripheral vision loss",
        medicalHistory: "Hypertension",
        familyHistory: "Father has glaucoma",
        patientResponses: {
            "Any eye pain?": "No pain.",
            "Any flashes?": "No flashes or floaters.",
            "Do you have a family history of eye disease?": "Yes, father has glaucoma."
        }
    }
];

// Generate a random encounter
document.getElementById("generateBtn").addEventListener("click", function() {
    const randomCase = cases[Math.floor(Math.random() * cases.length)];

    document.getElementById("chiefComplaint").innerText = randomCase.chiefComplaint;
    document.getElementById("medicalHistory").innerText = randomCase.medicalHistory;
    document.getElementById("familyHistory").innerText = randomCase.familyHistory;

    document.getElementById("patientAnswer").innerText = ""; // reset answer
    document.getElementById("userQuestion").value = ""; // reset question
    document.getElementById("encounterBox").classList.remove("hidden");

    // Save the current case globally for Q&A
    window.currentCase = randomCase;
});

// Handle user questions
document.getElementById("askBtn").addEventListener("click", function() {
    const question = document.getElementById("userQuestion").value.trim();

    if (!question) {
        alert("Please ask a question.");
        return;
    }

    const answer = window.currentCase.patientResponses[question] || 
                   "The patient is unsure or has no additional information on that.";
    
    document.getElementById("patientAnswer").innerText = answer;
});
