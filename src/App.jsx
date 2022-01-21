import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './Form';
 

const App = () => {

  const handleChange = val => {
    console.log("new data");
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
    </div>
  );
};

export default App;
