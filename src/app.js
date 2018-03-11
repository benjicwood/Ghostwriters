import React from 'react'
import ReactDOM from 'react-dom'

// import background from '../dist/images/htglogo.jpg'

class Main extends React.Component {
  render() {
    return (
      <div>
        <img src='http://i1244.photobucket.com/albums/gg569/benjicwood/htglogo-1_zps1pebtllh.png' />        
        <h1>Ghostwriters</h1>     
         </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)