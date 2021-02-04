import './scss/styles.scss';
import fetchService from './js/fetch-service.js';
import debounce from 'lodash.debounce';

document.querySelector('input').addEventListener(
  'input',
  debounce(event => {
    fetchService(event.target.value);
  }, 500),
);
