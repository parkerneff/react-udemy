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
        otherState: "Some value",
        showPersons: false
    }


    switchNameHandler = (newName) => {
        //console.log("Was clicked");
        //this.state.persons[0].name = "Johnny";
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Bill", age: 27},
                {name: 'Mary', age: 35}
            ]


        })
    };

    nameChangedHander = (event) => {
        this.setState({
            persons: [
                {name: "Bill", age: 28},
                {name: event.target.value, age: 27},
                {name: 'Mary', age: 35}
            ]


        })

    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"

        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        changed={this.nameChangedHander}
                        click={this.switchNameHandler.bind(this, "Parker!!")}>My Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div>

            )

        }


        return (
            <div className="App">
                <h1>Hi I am a react app</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>

                {persons}


            </div>
        );
    }
}

export default App;
