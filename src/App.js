import logo from './logo.svg';
import './App.css';

function App() {

  // document.write("MetaBuddy processing...");

  // console.log('Before');

  // const request = new XMLHttpRequest()
  // request.open('GET', 'https://api.decentraland.org/v2/tiles');
  // //request.responseType = 'blob'
  // request.addEventListener('load', () => {

  //   if (request.status == 200) { 
  //     //var responseString = request.response.JSON;
  //     var dataBlob = JSON.parse(request.response);
  //     console.log('Success');
  //     const dataArray = JSON.parse(request.response);
      
  //     const tileBlob = dataBlob.data['30,100'];

  //     console.log(tileBlob);

  //     document.write(tileBlob['name']);
  //   } else {
  //     console.log(`${request.status}: ${request.statusText}`)
  //   }
  // })
  // request.addEventListener('error', event => console.log('Network error'));
  // request.send()

  // console.log('After');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
