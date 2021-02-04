import './scss/styles.scss';
import fetchService from './js/fetch-service.js';

import _ from 'lodash';


// $('.class').on('load',function(){})


document.querySelector('input').addEventListener(
  'input',
  _.debounce(event => {
    fetchService(event.target.value);
  }, 500),
);
