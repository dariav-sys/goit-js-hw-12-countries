import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import updateCountryMarkup from '../templates/countries.hbs';
import countriesList from '../templates/countries-list.hbs';
import refs from './refs.js';

// const container = document.querySelector('.container');

export default function markup(data) {
  if (data.length > 1 && data.length <= 10)
    refs.container.innerHTML = countriesList(data);
  else if (data.length > 10) errorMessage();
  else
    refs.container.innerHTML = data.map(country =>
      updateCountryMarkup(country),
    );
}

function errorMessage() {
  error({
    text: 'Too may matches found. Please enter a more specific query.',
    delay: 2000,
  });
}
