const request = require('request') // in node_modules

const url = 'https://api.darksky.net/forecast/34cc6914a6534738cad553d880e01621/37.8267,-122.4233?units=si'
// https://darksky.net/dev/docs#forecast-request
//https://darksky.net/dev/account
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// + ?key=value&otherkey=othervalue
request({ url: url, json: true }, (error, response) => {
  // no longer a string, now a parsed object (json:true)
  //console.log(response.body.currently)
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
})


//Geocoding
// Address --> longitude/latitude --> weather
// Goal: Print the long/lat for LA
// 1. Fire off a new request to the URL explored in browswer
// 2. Have the request module parse it as json
// 3. Print both long and lat to the terminal (from center array in response object)
// 4. Test your work

const geocodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoieWlkYWgiLCJhIjoiY2p0emRxOW9mMXZkOTRkcXkzczA1amwzcCJ9.dPB454PwfwGyFX20wAuOfQ'
// see --> mapbox documentation %%
request({url:geocodeURL, json:true}, (error, response) => {
  const latitude = response.body.features[0].center[0] // longitude
  const longitude = response.body.features[0].center[1] // latitude
  console.log(longitude, latitude)
})

/*
request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body) //when console.logging response, you get an object with a property of body
  console.log(data.currently) // currently is a property in body
})
*/

// CHROME EXTENSION JSON FORMATTER --> open up and copy paste url to see parsed json object


// package.json --> npm init --y
// package-lock.json --> npm request@2.88.0
// run script --> node app.js




// %% mapbox
// The mapbox-places endpoint is accessible to all geocoding customers. Requests to this endpoint must be triggered by user
// activity. Any results must be displayed on a Mapbox map and cannot be stored permanently, as described in Mapbox’s
// terms of service. --> https://mapbox.com/api/search/#geocoding
// geocoding/v5/{endpoint}/{search_text}.json
// search_text = The feature you’re trying to look up. This could be an address, a point of interest name, a city name, etc.
// limit = max number of results to return (default = 5, max = 10)

// reverse geocoding --> /geocoding/v5/{endpoint}/{longitude},{latitude}.json
