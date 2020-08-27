const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length) {
      callback(error, data[0].description);
    }
    else {
      error = "Unknown breed";
      callback(error,null);
    }
  });
};

module.exports = { fetchBreedDescription };

