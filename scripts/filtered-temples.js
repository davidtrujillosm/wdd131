const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
document.getElementById('lastmodified').textContent = `Last edited: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", function () {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Salt Lake",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 253015,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8458.jpg"
	},
	{
		templeName: "Accra Ghana",
		location: "Accra, Ghana",
		dedicated: "2004, January, 11",
		area: 17550,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg"
	},
	{
		templeName: "Cebu City Philippines",
		location: "Cebu City, Philippines",
		dedicated: "2010, June, 13",
		area: 15454,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
	},
];

function displayTemples(templeList) {
	const templeContainer = document.getElementById("temple-container");
	templeContainer.innerHTML = "";

	templeList.forEach(temple => {
		const card = document.createElement("div");
		card.classList.add("temple-card");

		card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            <div class="info">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq. ft</p>
            </div>
            `;

		templeContainer.appendChild(card);
	});
}

// Create/select the h2 element so it can dynamically change throughout
const pageNameButton = document.querySelector("#pageName");

// Old temples
const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
const oldButton = document.querySelector("#old-button");
oldButton.addEventListener("click", () => {
	pageNameButton.textContent = "Old";
	oldButton.classList.add("active");
	[newButton, largeButton, smallButton, homeButton].forEach(button => button.classList.remove("active"));
	displayTemples(oldTemples);
});

// New temples
const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
const newButton = document.querySelector("#new-button");
newButton.addEventListener("click", () => {
	pageNameButton.textContent = "New";
	newButton.classList.add("active");
	[oldButton, largeButton, smallButton, homeButton].forEach(button => button.classList.remove("active"));
	displayTemples(newTemples);
});

// Large temples
const largeTemples = temples.filter(temple => temple.area > 90000);
const largeButton = document.querySelector("#large-button");
largeButton.addEventListener("click", () => {
	pageNameButton.textContent = "Large";
	largeButton.classList.add("active");
	[newButton, oldButton, smallButton, homeButton].forEach(button => button.classList.remove("active"));
	displayTemples(largeTemples);
});

// Small temples
const smallTemples = temples.filter(temple => temple.area < 10000);
const smallButton = document.querySelector("#small-button");
smallButton.addEventListener("click", () => {
	pageNameButton.textContent = "Small";
	smallButton.classList.add("active");
	[newButton, largeButton, oldButton, homeButton].forEach(button => button.classList.remove("active"));
	displayTemples(smallTemples);
});

// Home button
const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
	pageNameButton.textContent = "Home";
	homeButton.classList.add("active");
	[newButton, largeButton, smallButton, oldButton].forEach(button => button.classList.remove("active"));
	displayTemples(temples);
});

// Display all temples by default upon loading page
displayTemples(temples);