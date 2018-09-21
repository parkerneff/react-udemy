import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: "1", name: 'Jim', age: 28},
            {id: "2", name: 'Paul', age: 27},
            {id: "3", name: 'Mary', age: 25}
        ],
        otherState: "Some value",
        showPersons: false
    }


    nameChangedHander = (event) => {
        this.setState({
            persons: [
                {name: "Bill", age: 28},
                {name: event.target.value, age: 27},
                {name: 'Mary', age: 35}
            ]


        })

    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        // or
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

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
                    {this.state.persons.map((person, index) => {
                        return <Person name={person.name}
                                       age={person.age}
                                       key={person.id}
                                       click={() => this.deletePersonHandler(index)}/>

                    })}

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
