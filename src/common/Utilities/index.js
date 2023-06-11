export const formatDate = (dashSeparatorsReverseDate) => {
  return (
    dashSeparatorsReverseDate.slice(8) +
    "." +
    dashSeparatorsReverseDate.slice(5, 7) +
    "." +
    dashSeparatorsReverseDate.slice(0, 4)
  );
};

export const getGenreName = (genreId, genres) => {
  if (genres && genres.length > 0) {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "";
  }
  return "";
};

export const replaceLongCountryNames = (countryNames) => {
  const countriesMap = new Map([
    ["United States of America", "USA"],
    ["United Kingdom", "UK"],
    ["Poland", "PL"],
  ]);
  countriesMap.forEach((shortName, longName) => {
    console.log(longName, shortName);
    countryNames = countryNames.replace(longName, shortName);
  });
  return countryNames;
};
