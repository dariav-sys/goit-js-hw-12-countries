import markup from './markup.js';

export default function fetchService(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => markup(data))
    //   if ((data.message = 'Not found')) {
    //     error({
    //       text: 'Wrong query.',
    //       delay: 1000,
    //     });
        //   } else 
       
        
    // })
    .catch(err => console.log(err));
}
