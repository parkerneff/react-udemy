import React, {Component} from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

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


    nameChangedHander = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;

        this.setState({
            persons: persons
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


        let persons = null;
        let btnClass = "";

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundry key={person.id}><Person name={person.name}
                                                     age={person.age}
                                                     click={() => this.deletePersonHandler(index)}
                                                     changed={(event) => this.nameChangedHander(event, person.id)}/></ErrorBoundry>

                    })}

                </div>

            );

            btnClass = classes.Red;

        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);

        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);

        }

        return (
            <div className={classes.App}>
                <h1>Hi I am a react app</h1>
                <p className={assignedClasses.join(" ")}>This is really working</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>

                {persons}


            </div>
        );
    }
}

export default App;
