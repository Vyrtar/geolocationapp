import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {jsonData ? 
        <>
          <p>Land: {jsonData.country}</p>
          <p>Bundesland: {jsonData.regionName}</p>
          <p>Postleitzahl: {jsonData.zip}</p>
          <p>Stadt: {jsonData.city}</p>
        </>
        :
          <p>"wait for it..."</p>
        }
        
      </header>
    </div>
  );
}

export default App;
