export const getCountries = async () => {
  const promise = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  const data = await promise.json();
  return data.sort((a, b) => {
    return a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1;
  });
};
