// galaxy_saver.js - Save galaxies for Luke Skywalker
// By Yoda, April 16, 2025

const fs = require('fs');

// Galaxy data (mock - replace with real, you must)
const galaxyData = [
    { sector: "Tatooine", value: 20.0, date: "2025-04-01" },
    { sector: "Alderaan", value: 21.5, date: "2025-04-02" },
    { sector: "Hoth", value: 19.0, date: "2025-04-03" },
    { sector: "Yavin", value: 25.0, date: "2025-04-04" },
    { sector: "Endor", value: 22.0, date: "2025-04-05" }
];

// Scan for threats (e.g., >10% change)
function scanGalaxy() {
    console.log("Scanning galaxies, I am...");
    let log = "Galaxy Report - Yoda’s Watch\n";
    
    for (let i = 1; i < galaxyData.length; i++) {
        const prev = galaxyData[i - 1].value;
        const curr = galaxyData[i].value;
        const change = (curr - prev) / prev;
        if (Math.abs(change) > 0.1) {  // 10% threshold - Dark Side stirs
            console.log(`Alert! In ${galaxyData[i].sector}, a disturbance: ${curr} (Change: ${(change * 100).toFixed(2)}%)`);
            log += `Sector: ${galaxyData[i].sector}, Value: ${curr}, Change: ${(change * 100).toFixed(2)}%\n`;
        }
    }

    // Save the log
    fs.writeFileSync('../docs/galaxy_report.txt', log);
    console.log("Galaxies watched, saved report is at SevenVoices/docs/galaxy_report.txt, hmm!");
}

// Run the scanner
scanGalaxy();
