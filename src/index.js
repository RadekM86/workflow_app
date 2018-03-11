import React from 'react';
import ReactDOM from 'react-dom';
import NewForm from './components/NewForm.js'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: true
        }
    }
     render(){

        return <div>
            <h1>it works!</h1>
            <NewForm />
            </div>
    }
}


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(<App />, document.getElementById('app'))
    
})
