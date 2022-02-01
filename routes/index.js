const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metabuddy' });
});

async function dclFetch(res) {
  console.log("Fetch Tiles...")
  const xCoord = -150 + Math.round(Math.random() * 300);
  const yCoord = -150 + Math.round(Math.random() * 300);
  const options = {method: 'GET', headers: {Accept: 'application/json'}};
  await fetch('https://api.decentraland.org/v2/tiles', options)
  .then(response => response.json())
  .then(jsondata => {
    console.log("------------------------------------------------------------------");
    console.log("data...")
    const key = xCoord + "," + yCoord;
    const tileBlob = jsondata.data[key];
    console.log(tileBlob['name']);
    res.send("Parcel name at "+xCoord+","+yCoord+" is: "+tileBlob['name']);
  })
  .catch(err => console.error(err));
}


router.get('/parcel/', function(req, res, next) {

  dclFetch(res);


});

module.exports = router;
