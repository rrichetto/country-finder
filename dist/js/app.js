import Countries from './modules/countries.js';
import UI from './modules/ui.js';

// Cache the DOM
const searchEl = document.querySelector('.nav__search');


// Instatiate countries
const countries = new Countries();
// Instantiate UI
const ui = new UI();
// Initialize main page with all countries
showCountries();

// Search input event listener
searchEl.addEventListener('keyup', showCountries)




// Initialize main page with all countries
function showCountries(e) {
  countries.getAllCountries()
    .then(data => {
      if (searchEl.value === '') {
        ui.renderCountries(data);
      } else {
        ui.renderCountries(searchCountries(data));
      }
    })
}

function searchCountries(countries) {
  const input = searchEl.value.toLowerCase();
  const filtered = [];

  countries.forEach(country => {
    if (country.name.toLowerCase().includes(input)) {
      filtered.push(country);
    }
  });

  return filtered;
}

