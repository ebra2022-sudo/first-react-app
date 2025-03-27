import { Component } from "react";



// State management in the class based component

class ClassComponent extends Component {
    // define construnctor with props
    constructor(props) {
        super(props);
        // define the state object using the this.state
        this.state = {
            count1:0,
            count2:0,
        };
    }

    render() {
        return(
            <div>
             <h1>This is the UI component from class Component</h1>
             <h1>Count1 : {this.state.count1}</h1> 
             <h1>Count2 : {this.state.count2}</h1>

             <button onClick={() => this.setState({count1: this.state.count1 + 1,})}>Increment count1</button>
             <button onClick={() => this.setState({count2: this.state.count2 + 1,})}>Incremen count2</button>
            </div>
        );
    }

};

export default ClassComponent;