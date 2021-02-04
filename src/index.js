import './scss/styles.scss';
import fetchService from './js/fetch-service.js';


import _ from 'lodash';
import refs from './js/refs';
// console.log(refs);

// $('.class').on('load',function(){})


refs.input.addEventListener(
  'input',
  _.debounce(event => {
    fetchService(event.target.value);
  }, 500),
);
