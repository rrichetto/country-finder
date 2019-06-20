const optionsEl = document.querySelector('.nav__region-options');
const optionEls = document.querySelectorAll('.nav__region');
const regionNameEl = document.querySelector('.nav__region-name');

export default class UI {

  renderCountries(countries) {
    let markup = '';

    countries.forEach(country => {
      markup += `
        <div class="card">
          <img class="card__flag" src=${country.flag}>
          <div class="card__content">
            <h3 class="card__name">${country.name}</h3>
            <p class="card__population"><span>Population:</span> ${country.population}</p>
            <p class="card__region"><span>Region:</span> ${country.region}</p>
            <p class="card__capital"><span>Capital:</span> ${country.capital}</p>
          </div>
        </div>
      `;
    })

    document.querySelector('.countries').innerHTML = markup;
  }

  getActiveRegion() {
    let region = '';

    optionEls.forEach(option => {
      if (option.classList.contains('active')) {
        region = option.dataset.region;
      }
    })

    return region;
  }

  setActiveRegion(e) {
    optionEls.forEach(option => {
      option.classList.remove('active');
    })

    e.target.classList.add('active');
    regionNameEl.textContent = e.target.textContent;
  }

  toggleFilter() {
    if (optionsEl.style.display === 'flex') {
      optionsEl.style.display = 'none';
    } else {
      optionsEl.style.display = 'flex';
    }
  }
}







