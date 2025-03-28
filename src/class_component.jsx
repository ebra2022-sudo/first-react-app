import { Component } from "react";

// State management in the class-based component

/**
 * Component has three lifecycles:
 * 
 * 1. Mounting (when the component is first created and added to the DOM tree):
 *    - A. constructor()
 *    - B. static getDerivedStateFromProps()
 *    - C. render()
 *    - D. componentDidMount()
 * 
 * 2. Updating (when the component re-renders due to state or prop changes):
 *    - A. static getDerivedStateFromProps()
 *    - B. shouldComponentUpdate()
 *    - C. render()
 *    - D. getSnapshotBeforeUpdate()
 *    - E. componentDidUpdate()
 * 
 * 3. Unmounting (when the component is removed from the DOM tree):
 *    - A. componentWillUnmount()
 */

class InnerComponent extends Component {
    componentWillUnmount() {
        console.log("Inside componentWillUnmount function block");
    }

    render() {
        return (
            <div>
                <h3>Inner component</h3>
            </div>
        );
    }
}

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 0,
            insideComponent: <InnerComponent />
        };
    }

    shouldComponentUpdate() {
        console.log("Inside shouldComponentUpdate block");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Inside the getSnapshotBeforeUpdate block");
        return null; // Returning null since we are not tracking any snapshot
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Inside componentDidUpdate block");
    }

    componentDidMount() {
        console.log("Inside componentDidMount block");
        setTimeout(
            () => {this.setState({ insideComponent: <div>Sample</div> });},
             5000);
    }

    render() {
        console.log("Inside render function block");

        return (
            <div>
                <h1>This is the UI component from class Component</h1>
                <h1>Count1 : {this.state.count1}</h1>
                <h1>Count2 : {this.state.count2}</h1>
                {this.state.insideComponent}

                <button onClick={() => this.setState({ count1: this.state.count1 + 1 })}>
                    Increment count1
                </button>
                <button onClick={() => this.setState({ count2: this.state.count2 + 1 })}>
                    Increment count2
                </button>
            </div>
        );
    }
}

export default ClassComponent;
