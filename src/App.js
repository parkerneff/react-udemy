import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Jim', age: 28},
            {name: 'Paul', age: 27},
            {name: 'Mary', age: 25}
        ],
        otherState: "Some value"
    }


    switchNameHandler = () => {
        //console.log("Was clicked");
        //this.state.persons[0].name = "Johnny";
        this.setState({
            persons: [
                {name: 'Jimmy', age: 28},
                {name: 'Paul', age: 27},
                {name: 'Mary', age: 35}
            ]


        })
    };



    render() {
        return (
            <div className="App">
                <h1>Hi I am a react app</h1>
                <p>This is really working</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
