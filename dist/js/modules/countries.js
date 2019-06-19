export default class Countries {

  async getAllCountries() {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await response.json();
    return data;
  }

  async getCountry(name) {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const data = await response.json();
    return data;
  }
}