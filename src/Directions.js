import './Directions.css';
import {useEffect, useState} from 'react';

let Directions=()=> {
  const [directions, setDirections] = useState(null);
  useEffect(() => {
    getDirections();
  }, []);

  const getDirections = async () => {
    
    const request = await fetch(  
      'http://127.0.0.1:5000/directions/cycling',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
     
      }
    )
    const response = await request.json();
    setDirections(response);
  }

  return (
    <div className="Directions" style={{
      position: 'absolute',
      top: '70px',
  
alignItems: 'center'
  }}>
      <header className="Directions-header">
          { directions &&
          <pre style={ {fontSize: '10px'}}>
               {JSON.stringify(directions, null, 2)}
            </pre>
}
      </header>
    </div>
  );
}

export default Directions;
