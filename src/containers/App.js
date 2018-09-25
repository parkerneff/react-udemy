import React, {PureComponent} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log("[App.js] inside constructor", props);
    }

    componentWillMount() {
        console.log("[App.js] inside componentWillMount", this.props);

    }

    componentDidMount() {
        console.log("[App.js] inside componentDidMount", this.props);

    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE App.js] inside shouldComponentUpdate", nextProps, nextState);
    //    // return true;
    //
    //     return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
    //
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE App.js] inside componentWillUpdate", nextProps, nextState);

    }

    componentDidUpdate() {
        console.log("[UPDATE App.js] inside componentDidUpdate");

    }


    state = {
        persons: [
            {id: "1", name: 'Jim', age: 28},
            {id: "2", name: 'Paul', age: 27},
            {id: "3", name: 'Mary', age: 25}
        ],
        otherState: "Some value",
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
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
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }


        });


    }

    loginHandler = () => {
        this.setState({authenticated: true});
    }


    render() {
        console.log("[App.js] inside render", this.props);
        let persons = null;

        if (this.state.showPersons) {
            persons =
                <Persons persons={this.state.persons}
                         clicked={this.deletePersonHandler}
                         changed={this.nameChangedHander}/>


        }


        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showPersons: true})
                }}>Show Persons
                </button>
                <Cockpit appTitle={this.props.title}
                         showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         login={this.loginHandler}
                         clicked={this.togglePersonsHandler}/>
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
