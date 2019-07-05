import React from 'react';
class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(){
        this.setState({
            count : this.state.count + 1
        });
    }

    onDecrement(){
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button type = "submit" onClick={this.onIncrement}> Increment </button>
                <button type = "submit" onClick={this.onDecrement}> Decrement </button>
            </div>
        );
    }
}

export default Counter;