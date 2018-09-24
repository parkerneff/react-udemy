import React, {Component} from 'react';


import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Aux from "../../../hoc/Aux";



class Person extends Component {

    constructor(props) {
        super(props);
        console.log("[Person.js] inside constructor", props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log("[Person.js] inside componentWillMount", this.props);

    }

    componentDidMount() {
        console.log("[Person.js] inside componentDidMount", this.props);

       // this.lastPersonRef.current.focus();
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }

    }

    focus() {
        this.inputElement.current.focus();
    }

render () {
    console.log("[Person.js] inside render", this.props);
    return (
        <Aux>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input
                ref={this.inputElement}
                type="text"
                onChange={this.props.changed}
                value={this.props.name} />
        </Aux>
    )}
};

export default withClass(Person, classes.Person);