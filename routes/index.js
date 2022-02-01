const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metabuddy' });
});

async function dclFetch(res) {
  console.log("Fetch Tiles...")
  const options = {method: 'GET', headers: {Accept: 'application/json'}};
  await fetch('https://api.decentraland.org/v2/tiles', options)
  .then(response => response.json())
  .then(jsondata => {
    console.log("------------------------------------------------------------------");
    console.log("data...")
    const key = "9,11";
    const tileBlob = jsondata.data[key];
    console.log(tileBlob['name']);
    res.send("parcal name is: "+tileBlob['name']);
  })
  .catch(err => console.error(err));
}


router.get('/parcel/', function(req, res, next) {

  dclFetch(res);


});

module.exports = router;
