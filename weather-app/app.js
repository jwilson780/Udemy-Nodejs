const geocode = require("./geocode/geocode");
const yargs = require("yargs");
const weather = require("./weather/weather");

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log("The following location  has been requested: \n");
    console.log(
      `Street: ${results.street},\nCity: ${results.city},\nState: ${
        results.state
      },\nCountry: ${results.country}\n`
    );
    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `It's currently ${weatherResults.temperature}.  It feels like ${
              weatherResults.apparentTemperature
            }`
          );
        }
      }
    );
  }
});
