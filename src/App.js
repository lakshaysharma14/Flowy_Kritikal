/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from './Components/Navigation';
import Lpannel from './Components/Lpannel';
import RightPannel from './Components/RightPannel';
import appendscript from './Components/appendScript'
import './flowy.min.css';

class App extends React.Component
{ 
  componentDidMount()
  {
    appendscript('/flowy.min.js')
    appendscript('/main.js')  
  } 

  render()
  {
      return(
        <div>
            <Navigation />
            <Lpannel />
            <RightPannel />
         <div id="canvas">
         </div>
        </div>
    );
  }
}

export default App;
