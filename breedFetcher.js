const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('An error has occured');
    console.log(error);
    return;
  }
  
  if (body === '[]') {
    console.log('Requested breed not found! Please type a breed again');
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0]['description']);
});
