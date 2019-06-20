const optionsEl = document.querySelector('.nav__region-options');
const optionEls = document.querySelectorAll('.nav__region');
const regionNameEl = document.querySelector('.nav__region-name');

export default class UI {

  renderCountries(countries) {
    let markup = '';

    countries.forEach(country => {
      markup += `
        <a href="details.html#${country.numericCode}" class="card">
          <img class="card__flag" src=${country.flag}>
          <div class="card__content">
            <h3 class="card__name">${country.name}</h3>
            <p class="card__population"><span>Population:</span> ${formatNum(country.population)}</p>
            <p class="card__region"><span>Region:</span> ${country.region}</p>
            <p class="card__capital"><span>Capital:</span> ${country.capital}</p>
          </div>
        </a>
      `;
    })

    document.querySelector('.countries').innerHTML = markup;
  }

  renderDetails(country) {
    let markup = `
      <div class="details__img-box">
        <img src="${country.flag}" alt="" class="details__flag">
      </div>
      <div class="details__content">
        <h2 class="details__name">${country.name}</h2>
        <div class="details__info-box">
          <p><span>Native Name: </span>${country.nativeName}</p>
          <p><span>Demonym: </span>${country.demonym}</p>
          <p><span>Population: </span>${formatNum(country.population)}</p>
          <p><span>Region: </span>${country.region}</p>
          <p><span>Sub Region: </span>${country.subregion}</p>
          <p><span>Capital: </span>${country.capital}</p>
          <p><span>Top Level Domain: </span>${country.topLevelDomain}</p>
          <p><span>Currency: </span>${country.currencies[0].name}</p>
          <p><span>Language: </span>${country.languages[0].name}</p>
        </div>
      </div>
    `;

    document.querySelector('.details').innerHTML = markup;
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

function formatNum(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}






