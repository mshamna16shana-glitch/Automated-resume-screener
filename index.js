const fs = require('fs');
const pdf = require('pdf-parse');

// Simple Resume Screener
async function screenResume() {
  try {
    // sample resume text - ne PDF kooda use pannalam
    const resumeText = "I have 2 years experience in Node.js, React, AWS";

    const requiredSkills = ["Node.js", "React", "AWS", "JavaScript"];
    let matchedSkills = [];
    let score = 0;

    requiredSkills.forEach(skill => {
      if (resumeText.includes(skill)) {
        matchedSkills.push(skill);
        score += 25;
      }
    });

    console.log("--- Resume Screener Result ---");
    console.log("Resume Text:", resumeText);
    console.log("Matched Skills:", matchedSkills);
    console.log("Score:", score + "%");
    
    if(score >= 50) {
        console.log("Status: SHORTLISTED ✅");
    } else {
        console.log("Status: REJECTED ❌");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

screenResume();