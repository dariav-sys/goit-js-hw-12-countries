import markup from './markup.js'

export default function fetchService(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => markup(data))
    .catch(() => console.log("There's no such a country"));
}