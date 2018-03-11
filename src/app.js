import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from './Nav/NavBar'

class Main extends React.Component {
  render() {
    return (
      <div>
        <img src='http://i1244.photobucket.com/albums/gg569/benjicwood/htglogo-1_zps1pebtllh.png' className="img-fluid" alt="Responsive image" style={backgroundimage} />        
        <NavBar />    
         </div>
    )
  }
}

const backgroundimage = {
    margin: 'auto',
    align: 'center'
  };

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)