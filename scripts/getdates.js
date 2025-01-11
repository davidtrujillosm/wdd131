const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastmodified').textContent = `Last modified: ${lastModifiedDate}`;