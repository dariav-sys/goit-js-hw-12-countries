import './scss/styles.scss';
import fetchService from './js/fetch-service.js';
import debounce from 'lodash.debounce';
// import refs from './js/refs.js';

const input = document.querySelector('input');



input.addEventListener('input', debounce(function searchCountry(event) {
  const inputValue = event.target.value;
//   console.log(fetchService);
  fetchService(inputValue);
}, 500));


