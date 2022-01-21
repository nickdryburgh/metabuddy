import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './Form';
import PropTypes from 'prop-types';

const App = () => {
  let output = "empty";

  const handleChange = val => {
    console.log("new data x:"+ val.xcoord + " y:" + val.ycoord);

    const request = new XMLHttpRequest()
    request.open('GET', 'https://api.decentraland.org/v2/tiles');

    request.addEventListener('load', () => {

      if (request.status == 200) { 
        var dataBlob = JSON.parse(request.response);
        const key = val.xcoord + "," + val.ycoord;
        const tileBlob = dataBlob.data[key];
        //this.output = tileBlob['name'];
        console.log(tileBlob['name']);
      } else {
        console.log(`${request.status}: ${request.statusText}`)
      }
    })

    request.addEventListener('error', event => console.log('Network error'));
    request.send()
  };

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> Metabuddy </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <Form change={handleChange} />
        </div>
      </div>
      <div className='row center'>
        <h4 className='white-text'>{output}</h4>
      </div>
    </div>
  );
};

// App.propTypes = {
//   output: PropTypes.string
// }

export default App;
