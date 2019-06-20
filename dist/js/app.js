import Countries from './modules/countries.js';
import UI from './modules/ui.js';

// Cache the DOM
const searchEl = document.querySelector('.nav__search');
const toggleEl = document.querySelector('.nav__toggle');
const optionsEl = document.querySelector('.nav__region-options');

// Instatiate countries
const countries = new Countries();
// Instantiate UI
const ui = new UI();
// Initialize main page with all countries
// showCountries();

let currentRegion = 'all';

// Listeners
window.addEventListener('DOMContentLoaded', () => {
  if (!location.href.includes('details')) {
    showCountries();
  } else {
    const code = location.hash.split('#')[1];
    showDetails(code)
  }
})
searchEl.addEventListener('keyup', showCountries);
toggleEl.addEventListener('click', ui.toggleFilter);
optionsEl.addEventListener('click', (e) => {
  ui.setActiveRegion(e);
  currentRegion = ui.getActiveRegion();
  showCountries(currentRegion);
  optionsEl.style.display = 'none';
})


// Initialize main page with all countries
function showCountries() {

  countries.getAllCountries()
    .then(data => {
      if (currentRegion === 'all') {
        return data;
      } else {
        return filter(data, currentRegion);
      }
    })
    .then(data => {
      if (searchEl.value === '') {
        ui.renderCountries(data);
      } else {
        ui.renderCountries(search(data));
      }
    })
}

function showDetails(code) {
  countries.getAllCountries()
    .then(data => {
      return data.find(country => {
        return country.numericCode === code;
      })
    })
    .then(data => {
      ui.renderDetails(data);
    })
}

function search(countries) {
  const input = searchEl.value.toLowerCase();
  const filtered = [];

  countries.forEach(country => {
    if (country.name.toLowerCase().includes(input)) {
      filtered.push(country);
    }
  });

  return filtered;
}

function filter(countries, region) {
  const filtered = [];

  countries.forEach(country => {
    if (country.region.toLowerCase() === region.toLowerCase()) {
      filtered.push(country);
    }
  });

  return filtered;
}
