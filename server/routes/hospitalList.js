const express = require('express');
const router = express.Router();
const axios = require('axios');
var coreapi = require('coreapi') ; // Loaded by `coreapi.js`
var schema = require('schema') ;   // Loaded by `schema.js`

router.post("/hospitallist", async (req, res) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  // const baseUrl = 'https://api.healthsites.io/api/v2';
  const apiKey = '15d62492e08f1bd227a666db0bece6d391e3f3f3';
  // const API_KEY = 'YOUR_API_KEY';
  const LATITUDE = 28.621900; // Your latitude
  const LONGITUDE = 77.277290; // Your longitude

  // axios.get(`https://api.healthsites.io/v1/facilities?api_key=${apiKey}&lat=${LATITUDE}&lng=${LONGITUDE}`)
  //   .then(response => {
  //     const results = response.data.results;
  //     const hospitalNames = results.map(result => result.properties.name);
  //     console.log('Hospitals:', hospitalNames);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });


  // Initialize a client
  var client = new coreapi.Client()

  // Interact with the API endpoint
  var action = ["api", "v2 > facilities > list"]
  var params = {
    'api-key': '15d62492e08f1bd227a666db0bece6d391e3f3f3',
  'page': '1',
  'country': 'India',
  'extent': '77.018893,28.595051,77.277290,28.621900',
  'output': 'json',
  'from': '12',
  'to': '13',
  'flat - properties': 'true',
  'tag - format':'osm' ,
}
  client.action(schema, action, params).then(function (result) {
    // Return value is in 'result'
    return result.json()
  }).then(res =>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })

})
module.exports = router