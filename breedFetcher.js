const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {

  try {
    const data = JSON.parse(body);
    if (data.length) {
      console.log(data[0].description);
    } else {
      console.log(`${breedName} as breed name is not found`);
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
});