const request = require("request");
const key = require("./key");
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      describe: "To fetch weather for",
      demand: true,
      alias: "address",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

var encodedAddress = encodeURI(argv.a);

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
      key.key
    }&location=${encodedAddress}`,
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log("Unable to connect to mapquest api server!");
    } else if (body.results[0].locations[0].latLng.lat === 39.390897) {
      //had to use above latitude value to prove not a place, mapquest doesn't return status like google api
      console.log("That is not a place!");
    } else {
      //formatting address w/ template strings
      console.log(
        `Address is : ${body.results[0].locations[0].street}, ${
          body.results[0].locations[0].adminArea5
        }, ${body.results[0].locations[0].adminArea3}, ${
          body.results[0].locations[0].adminArea1
        }`
      );
      console.log(`Latitude is : ${body.results[0].locations[0].latLng.lat}`); // gets lat back for future api use
      console.log(`Longitude is : ${body.results[0].locations[0].latLng.lng}`); // gets lng back for furture api use
    }
  }
);
