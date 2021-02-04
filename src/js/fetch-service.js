import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import updateCountryMarkup from '../templates/countries.hbs';
import countriesList from '../templates/countries-list.hbs';
// import refs from '../js/refs.js';

export default fetchService;

const container = document.querySelector('.container');
// const input = document.querySelector('input')

// const refs = {
//   container: document.querySelector('.container'),
//   input: document.querySelector('input')
// }

function fetchService(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => markup(data))
    .catch(() => console.log("There's no such a country"));
}

function markup(data) {


  // if (data.length >= 2 && data.length <= 10) {
  //   container.innerHTML = countriesList(data);
  // } else if (data.length > 10) {    
  //   errorMessage();
  // } else {
  //   // console.log(data);
  //   const markedCountry = data.map(country => updateCountryMarkup(country));
  //   container.innerHTML = markedCountry;
  // }

  data.length >= 2 && data.length <= 10 ? container.innerHTML = countriesList(data) : data.length > 10 ? errorMessage() : container.innerHTML = data.map(country => updateCountryMarkup(country));
}

function errorMessage() {
  error({
    text: 'Too may matches found. Please enter a more specific query.',
    delay: 2000,
  });
}
