const key = require("../key");
const request = require("request");

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURI(address);

  request(
    {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
        key.key
      }&location=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to mapquest api server!");
      } else if (body.results[0].locations[0].latLng.lat === 39.390897) {
        //had to use above latitude value to prove not a place, mapquest doesn't return status like google api
        callback("That is not a place!");
      } else {
        //formatting address w/ template strings
        callback(undefined, {
          street: body.results[0].locations[0].street,
          city: body.results[0].locations[0].adminArea5,
          state: body.results[0].locations[0].adminArea3,
          country: body.results[0].locations[0].adminArea1,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress
};
