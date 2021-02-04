
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import markup from './markup';

export default function fetchService(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
      .then(data => {
          
      if (data.message === 'Not Found') {
        error({
          text: 'Wrong query.',
          delay: 2000,
        });
      }
          markup(data);
    })

    .catch(err => console.log(err));
}

