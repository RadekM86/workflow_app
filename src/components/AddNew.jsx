import React from 'react';

function Database(name, property, status){
    this.name = name;
    this.property = property;
    this.status = status
}

let database = new Database("A", "B", "C")

export default class AddNew extends React.Component{
    constructor(props){
        super(props);
        this.state={
            object: database
        }
    }
    render(){
        return <div>
            <input type="text"/>
            <h1>{this.state.object.name}</h1>
            <h2>{this.state.object.property}</h2>
            <h3>{this.state.object.status}</h3>
        </div>
    }
}