import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';


class App extends React.Component{
    constructor(props){
        super(props);
    }
   
       render(){
          return <div>
                <h1>works</h1>
              </div>
      }
}


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(<App />, document.getElementById('app'))
    
})
