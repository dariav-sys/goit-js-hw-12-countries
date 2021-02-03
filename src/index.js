import './scss/styles.scss';
import fetchCountries from './js/fetch-countries.js';
import debounce from 'lodash.debounce';

const input = document.querySelector('input');

input.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(event) {
  const inputValue = event.target.value;
//   console.log(fetchCountries);
  fetchCountries(inputValue);
}
