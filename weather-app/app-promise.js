const yargs = require("yargs");
const axios = require("axios");
const key = require("./keys");

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

var encodedAddress = encodeURI(argv.address);
var geoCodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${
  key.mapquestKey
}&location=${encodedAddress}`;

axios
  .get(geoCodeURL)
  .then(res => {
    if (res.data.results[0].locations[0].latLng.lat === 39.390897) {
      throw new Error("Unable to find that address or place!");
    }
    var latitude = res.data.results[0].locations[0].latLng.lat;
    var longitude = res.data.results[0].locations[0].latLng.lng;
    var weatherURL = `https://api.darksky.net/forecast/${
      key.darkskyKey
    }/${latitude},${longitude}`;
    return axios.get(weatherURL);
  })
  .then(res => {
    var temperature = res.data.currently.temperature;
    var apparentTemperature = res.data.currently.apparentTemperature;
    console.log(
      `It is currently ${temperature}, and it feels like ${apparentTemperature}`
    );
  })
  .catch(e => {
    if (e.code === "ENOTFOUD") {
      console.log("Unable to connect to API servers");
    } else {
      console.log(e.message);
    }
  });
