// Target elements for mock API data
const leftTitle = document.getElementById("left_title");
const leftContent = document.getElementById("left_content");
const rightTitle = document.getElementById("right_title");
const rightContent = document.getElementById("right_content");

// Fetch data from mock API
async function getData() {
	try {
		let response = await fetch("./api.js");
		let responseJson = await response.json();
		displayData(responseJson);
	} catch (err) {
		console.log(err);
	}
}

// Display data on UI
function displayData(data) {
	leftTitle.innerText = data[0].title
    leftContent.innerText = data[0].summary
    rightTitle.innerText = data[1].title
    rightContent.innerText = data[1].summary
}

getData();
