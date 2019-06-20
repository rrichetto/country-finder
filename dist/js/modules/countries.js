export default class Countries {

  async getAllCountries() {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await response.json();
    return data;
  }

  async getCountry(code) {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    const data = await response.json();
    return data;
  }
}