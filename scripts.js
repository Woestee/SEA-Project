/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const races = [ // Array of objects
  {id: 1, // Primary key
    season: 2020,
    date: "2020-09-06",
    raceName: "Italian Grand Prix",
    circuit: "Monza",
    country: "Italy",
    winnerDriver: "Pierre Gasly",
    winnerTeam: "AlphaTauri",
    laps: 53,
    fastestLap: "1:22.746",
    weather: "Dry",
  },
  {id: 2,
    season: 2020,
    date: "2020-12-06",
    raceName: "Sakhir Grand Prix",
    circuit: "Bahrain Outer Circuit",
    country: "Bahrain",
    winnerDriver: "Sergio Perez",
    winnerTeam: "Racing Point",
    laps: 87,
    fastestLap: "0:55.404",
    weather: "Dry",
  },
  {id: 3,
    season: 2020,
    date: "2020-11-15",
    raceName: "Turkish Grand Prix",
    circuit: "Istanbul Park",
    country: "Turkey",
    winnerDriver: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    laps: 58,
    fastestLap: "1:36.806",
    weather: "Wet",
  },
  {id: 4,
    season: 2021,
    date: "2021-12-12",
    raceName: "Abu Dhabi Grand Prix",
    circuit: "Yas Marina Circuit",
    country: "UAE",
    winnerDriver: "Max Verstappen",
    winnerTeam: "Red Bull Racing",
    laps: 58,
    fastestLap: "1:26.103",
    weather: "Dry",
  },
  {id: 5,
    season: 2021,
    date: "2021-07-18",
    raceName: "British Grand Prix",
    circuit: "Silverton",
    country: "United Kingdom",
    winnerDriver: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    laps: 52,
    fastestLap: "1:28.617",
    weather: "Dry",
  },
  {id: 6,
    season: 2021,
    date: "2021-08-01",
    raceName: "Hungarian Grand Prix",
    circuit: "Hungaroring",
    country: "Hungary",
    winnerDriver: "Esteban Ocon",
    winnerTeam: "Alpine",
    laps: 70,
    fastestLap: "1:18.394",
    weather: "Mixed",
  },
  {id: 7,
    season: 2022,
    date: "2022-10-09",
    raceName: "Japanese Grand Prix",
    circuit: "Suzuka",
    country: "Japan",
    winnerDriver: "Max Verstappen",
    winnerTeam: "Red Bull Racing",
    laps: 28,
    fastestLap: "1:44.411",
    weather: "Wet",
  },
  {id: 8,
    season: 2022,
    date: "2022-11-13",
    raceName: "Sao Paulo Grand Prix",
    circuit: "Interlagos",
    country: "Brazil",
    winnerDriver: "George Russell",
    winnerTeam: "Mercedes",
    laps: 71,
    fastestLap: "1:13.785",
    weather: "Dry",
  },
  {id: 9,
    season: 2022,
    date: "2022-05-29",
    raceName: "Monaco Grand Prix",
    circuit: "Monte Carlo",
    country: "Monaco",
    winnerDriver: "Sergio Perez",
    winnerTeam: "Red Bull Racing",
    laps: 64,
    fastestLap: "1:16.232",
    weather: "Wet",
  },
  {id: 10,
    season: 2023,
    date: "2023-08-27",
    raceName: "Dutch Grand Prix",
    circuit: "Zandvoort",
    country: "Netherlans",
    winnerDriver: "Max Verstappen",
    winnerTeam: "Red Bull Racing",
    laps: 72,
    fastestLap: "1:13.837",
    weather: "Mixed",
  },
  {id: 11,
    season: 2023,
    date: "2023-11-18",
    raceName: "Las Vegas Grand Prix",
    circuit: "Las Vegas Strip Circuit",
    country: "USA",
    winnerDriver: "Max Verstappen",
    winnerTeam: "Red Bull Racing",
    laps: 50,
    fastestLap: "1:35.490",
    weather: "Dry",
  },
  {id: 12,
    season: 2023,
    date: "2023-09-03",
    raceName: "Italian Grand Prix",
    circuit: "Monza",
    country: "Italy",
    winnerDriver: "Max Verstappen",
    winnerTeam: "Red Bull Racing",
    laps: 51,
    fastestLap: "1:25.072",
    weather: "Dry",
  }
];

let filteredRaces = [...races]; // Copy data with spread operator

function renderRaces(raceArray) { // Renders array
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clears exisitng content

  if(raceArray.length === 0) { // When no races are in array
    cardContainer.innerHTML = `
      <div class="no-result">
        <h3>No Races Found</h3>
        <p>Adjust filters or add a new race</p>
      </div>
    `;
    return;
  }

  for(let i = 0; i < raceArray.length; i++) { // Iterates through array
    const race = raceArray[i];

    const card = document.createElement("div"); // Dynamic DOM creation
    card.classList.add("card"); // Adds CSS class

    // Injects object data into HTML
    card.innerHTML = `
      <div class="card-content">
        <h3>${race.season} ${race.raceName}</h3>
        <p><strong>Date: </strong>${race.date}</p>
        <p><strong>Country: </strong>${race.country}</p>
        <p><strong>Circuit: </strong>${race.circuit}</p>
        <p><strong>Winning Driver: </strong>${race.winnerDriver}</p>
        <p><strong>Winning Team: </strong>${race.winnerTeam}</p>
        <p><strong>Laps: </strong>${race.laps}</p>
        <p><strong>Fastest Lap: </strong>${race.fastestLap}</p>
        <p><strong>Weather: </strong>${race.weather}</p>
        <div class="card-buttons">
          <button onclick="editRace(${race.id})">Edit</button>
          <button onclick="deleteRace(${race.id})">Delete</button>
        </div>
      </div>
    `;
    cardContainer.appendChild(card); // Appends element to container
  }
}

function getUniqueValues(key) { // Helper function to pull dropdown values
  const values = [];

  for(let i = 0; i < races.length; i++) {
    const value = races[i][key];
    if(!values.includes(value)) {
      values.push(value);
    }
  }
  return values;
}

function renderDropdownOptions() {  // Dropdown Options: season, circuit, and weather
  const seasonFilter = document.getElementById("season-filter");
  const circuitFilter = document.getElementById("circuit-filter");
  const weatherFilter = document.getElementById("weather-filter");

  const seasons = getUniqueValues("season");
  const circuits = getUniqueValues("circuit");
  const weatherTypes = getUniqueValues("weather");

  seasonFilter.innerHTML = '<option value = "all">All Seasons</option>';  // Default position
  circuitFilter.innerHTML = '<option value = "all">All Circuits</option>';
  weatherFilter.innerHTML = '<option value = "all">All Weather</option>';

  for(let i = 0; i < seasons.length; i++) { // Populates dropdown with values and shows value choosen in dropdown box
    seasonFilter.innerHTML += `<option value = "${seasons[i]}">${seasons[i]}</option>`;
  }

  for(let i = 0; i < circuits.length; i++) {
    circuitFilter.innerHTML += `<option value = "${circuits[i]}">${circuits[i]}</option>`;
  }

  for(let i = 0; i < weatherTypes.length; i++) {
    weatherFilter.innerHTML += `<option value = "${weatherTypes[i]}">${weatherTypes[i]}</option>`;
  }

}

function applyFiltersAndSort() {  // Search, Filter, and Sort
  const searchValue = document.getElementById("search-input").value.toLowerCase();
  const seasonValue = document.getElementById("season-filter").value;
  const circuitValue = document.getElementById("circuit-filter").value;
  const weathervalue = document.getElementById("weather-filter").value;
  const sortValue = document.getElementById("sort-select").value;

  let result = [...races];

  // Search
  if(searchValue !== "") {
    result = result.filter(function(race) {
      return (  // Returns matching search value(s)
        race.raceName.toLowerCase().includes(searchValue) ||
        race.winnerDriver.toLowerCase().includes(searchValue) ||
        race.winnerTeam.toLowerCase().includes(searchValue)
      );
    });
  }

  // Filters
  if(seasonValue !== "all") {
    result = result.filter(function(race) {
      return race.season === Number(seasonValue);
    });
  }

  if(circuitValue !== "all") {
    result = result.filter(function(race) {
      return race.circuit === circuitValue;
    });
  }

  if(weathervalue !== "all") {
    result = result.filter(function(race){
      return race.weather === weathervalue;
    });
  }

  // Sort
  if(sortValue === "season-ascending") {
    result.sort(function(a, b) {
      return a.season - b.season;
    });
  } else if(sortValue === "season-descending") {
    result.sort(function(a, b) {
      return b.season - a.season;
    });
  }

  filteredRaces = result;
  renderRaces(filteredRaces);
}

function editRace(id) { // Edit function
  let selectedRace = null;

  for(let i = 0; i < races.length; i++) {
    if(races[i].id === id) {
      selectedRace = races[i];
      break;
    }
  }

  if(selectedRace === null) {
    console.log("Race not found");
    return;
  }
  // Populates add form with exisiting race data
  document.getElementById("race-id").value = selectedRace.id;
  document.getElementById("season").value = selectedRace.season;
  document.getElementById("date").value = selectedRace.date;
  document.getElementById("race-name").value = selectedRace.raceName;
  document.getElementById("circuit").value = selectedRace.circuit;
  document.getElementById("country").value = selectedRace.country;
  document.getElementById("winner-driver").value = selectedRace.winnerDriver;
  document.getElementById("winner-team").value = selectedRace.winnerTeam;
  document.getElementById("laps").value = selectedRace.laps;
  document.getElementById("fastest-lap").value = selectedRace.fastestLap;
  document.getElementById("weather").value = selectedRace.weather;

  const formTitle = document.getElementById("form-title");
  const formButton = document.getElementById("form-button");

  if(formTitle) {
    formTitle.textContent = "Edit Race";
  }

  if(formButton) {
    formButton.textContent = "Update Race";
  }
  document.getElementById("race-form").scrollIntoView({ behavior: "smooth" });
  console.log("Edited race with id: ", id);
}

function updateRace() {
  const raceId = Number(document.getElementById("race-id").value);
  const season = Number(document.getElementById("season").value);
  const date = document.getElementById("date").value;
  const raceName = document.getElementById("race-name").value;
  const circuit = document.getElementById("circuit").value;
  const country = document.getElementById("country").value;
  const winnerDriver = document.getElementById("winner-driver").value;
  const winnerTeam = document.getElementById("winner-team").value;
  const laps = Number(document.getElementById("laps").value);
  const fastestLap = document.getElementById("fastest-lap").value;
  const weather = document.getElementById("weather").value;

  for(let i = 0; i < races.length; i++) { // Updates variables
    if(races[i].id === raceId) {
      races[i].season = season;
      races[i].date = date;
      races[i].raceName = raceName;
      races[i].circuit = circuit;
      races[i].country = country;
      races[i].winnerDriver = winnerDriver;
      races[i].winnerTeam = winnerTeam;
      races[i].laps = laps;
      races[i].fastestLap = fastestLap;
      races[i].weather = weather;
      break;
    }
  }

  renderDropdownOptions();
  applyFiltersAndSort();

  document.getElementById("race-form").reset();
  document.getElementById("race-id").value = "";

  const formTitle = document.getElementById("form-title");
  const formButton = document.getElementById("form-button");

  if(formTitle) {
    formTitle.textContent = "Add Race";
  }

  if(formButton) {
    formButton.textContent = "Save Race";
  }

  console.log("Updated race with id: ", raceId);
}

function deleteRace(id) { // Delete function
  const confirmed = confirm("You are about to delete this race, are you sure?");
  
  if(!confirmed) {
    return;
  }

  const updatedRaces = races.filter(function(race) {
    return race.id !== id;
  });

  races.length = 0;
  races.push(...updatedRaces);
  renderDropdownOptions();
  applyFiltersAndSort();
  console.log("Deleted race with id: ", id);
}

function generateId() {
  if(races.length === 0) {
    return 1;
  }

  let maxId = races[0].id;

  for(let i = 1; i < races.length; i++) {
    if(races[i].id > maxId) {
      maxId = races[i].id;
    }
  }
  return maxId + 1;
}

function addRace() {  // Add function
  const season = document.getElementById("season").value;
  const date = document.getElementById("date").value;
  const raceName = document.getElementById("race-name").value;
  const country = document.getElementById("country").value;
  const circuit = document.getElementById("circuit").value;
  const winnerDriver = document.getElementById("winner-driver").value;
  const winnerTeam = document.getElementById("winner-team").value;
  const laps = document.getElementById("laps").value;
  const fastestLap = document.getElementById("fastest-lap").value;
  const weather = document.getElementById("weather").value;

  const newRace = {
    id: generateId(),
    season: Number(season), // Converts type
    date, raceName, circuit, country, winnerDriver, winnerTeam,
    laps: Number(laps),
    fastestLap, weather
  };

  races.push(newRace); // Adds race to main array
  renderDropdownOptions();
  applyFiltersAndSort();
  document.getElementById("race-form").reset();
  document.getElementById("race-id").value = "";

  const formTitle = document.getElementById("form-title");
  const formButton = document.getElementById("form-button");

  if(formTitle) {
    formTitle.textContent = "Add Race";
  }

  if(formButton) {
    formButton.textContent = "Save Race";
  }

  console.log("Race added: ", newRace);
}

document.addEventListener("DOMContentLoaded", function() { // Waits until HTML is loaded before executing
  renderRaces(filteredRaces); // Initial data render
  renderDropdownOptions();
  
  const form = document.getElementById("race-form");
  form.addEventListener("submit", function (event)  {
    event.preventDefault(); // Stops page from reloading
    const raceId = document.getElementById("race-id").value;

    if(raceId === "") {
      addRace();
    } else {
      updateRace();
    }

    renderDropdownOptions();
    applyFiltersAndSort();
  }); 
  document.getElementById("search-input").addEventListener("input", applyFiltersAndSort);
  document.getElementById("season-filter").addEventListener("change", applyFiltersAndSort);
  document.getElementById("circuit-filter").addEventListener("change", applyFiltersAndSort);
  document.getElementById("weather-filter").addEventListener("change", applyFiltersAndSort);
  document.getElementById("sort-select").addEventListener("change", applyFiltersAndSort);
});

/*
const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
*/