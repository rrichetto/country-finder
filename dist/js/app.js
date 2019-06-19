import Countries from './modules/countries.js';

// Instatiate countries
const countries = new Countries();

// Init main page with all countries
init();


// Init main page with all countries
function init() {
  countries.getAllCountries()
    .then(data => {
      console.log(data)
    })

  // UI.RENDER();
}
