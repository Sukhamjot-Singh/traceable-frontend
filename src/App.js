
import { useState, useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => { 
      // fetch("http://localhost:5000/getContainers")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     console.log(data);
      //   })
  }, []);
  const [message, setMessage] = useState('');
  const [save, setSave] = useState(false);

  const handleChange = event => {
    setMessage(event.target.value);
    if(event.target.value != '')
     {setSave(true);}
    console.log('value is:', event.target.value);
  };

  const handleSubmit = event => {

  }
  

  return (
    <div className="container">
        {save?(<button className="bg-primary text-white" onClick={handleSubmit}>Save</button>) : <></>}
      <div className="row">
        <div className="col-md-6 text-center">
          <input className="m-3 form-control" placeholder="Type input"
            onChange={handleChange}
            value={message}></input>
            <h3>{message}</h3>
        </div>
        <div className="col-md-6 text-center">
        <input className="m-3" type="checkbox"></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center">
          <input className="m-3" type="textarea"></input>
        </div>
        <div className="col-md-6 text-center">
          <input className="m-3" type="checkbox"></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center">
          Yo
        </div>
        <div className="col-md-6 text-center">
          Yo
        </div>
      </div>
    </div>
  );
}

export default App;
