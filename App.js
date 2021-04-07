import React from 'react';
import Button from './components/Button';
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="Buttons">
        <Button size ="large">REAL BUTTON</Button>
        <Button size ="medium">REAL BUTTON</Button>
        <Button size ="small">REAL BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="gray" size ="large">REAL BUTTON</Button>
        <Button color="gray" size ="medium">REAL BUTTON</Button>
        <Button color="gray" size ="small">REAL BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="pink"size ="large">REAL BUTTON</Button>
        <Button color="pink"size ="medium">REAL BUTTON</Button>
        <Button color="pink"size ="small">REAL BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button size ="large" outline={true} >REAL BUTTON</Button>
        <Button color= "gray" size ="medium"outline={true}>REAL BUTTON</Button>
        <Button color="pink"size ="small"outline={true}>REAL BUTTON</Button>
      </div>

      <div className="Buttons">
        <Button size ="large" fullWidth >REAL BUTTON</Button>
        <Button size ="large" color= "gray" fullWidth>REAL BUTTON</Button>
        <Button color="pink"size ="large" fullWidth 
        onclick={()=>{console.log('클릭!');}}>REAL BUTTON</Button>
      </div>

    </div>
  );
}

export default App;
