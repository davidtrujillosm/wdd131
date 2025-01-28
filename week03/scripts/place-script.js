// Display the last modified date for the footer
const lastModifiedElement = document.getElementById("last-modified");
const currentYearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} David Trujillo - Cochabamba, Bolivia`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

// Display windchill factor 

let T = 70;
let vs = 12;
let windChill;

if (T < 50 && vs > 3) {
    document.querySelector("#windChill").innerHTML = calculateWincdChill(T, vs);
} else {
    document.querySelector("#windChill").innerHTML = "N/A";
}


// Function to calculate windchill

function calculateWincdChill(T, vs) {
    windChill = 12.12 + (0.6215 * T) - (11.37 * Math.pow(vs, 0.16)) + (0.3965 * T * Math.pow(vs, 0.16));
    return windChill.toFixed(2)
}