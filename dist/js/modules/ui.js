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
}







