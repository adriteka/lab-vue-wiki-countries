let countries;

export const getCountries = async () => {
  if (countries) return countries;
  else {
  console.log("Fetching ALL countries");
  const promise = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  countries = await promise.json();
  countries.sort((a, b) => {
    return a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1;
  })};
  return countries;
};

export const getCountry = async (alpha3Code) => {
  console.log(`Fetching ${alpha3Code} country`);
  const promise = await fetch(
    "https://ih-countries-api.herokuapp.com/countries/" + alpha3Code
  );
  return await promise.json();
}
