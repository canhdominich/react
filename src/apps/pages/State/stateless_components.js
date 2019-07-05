import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    onDecrement() {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        return <CounterPresenter
            count={this.state.count}
            onIncrement={this.state.onIncrement}
            onDecrement={this.state.onDecrement}
        />
    }
}

export default CounterComponent;

function CounterPresenter(props) {
    return (
        <div>
            <p>{props.count}</p>
            <button type="button" onClick={props.onIncrement}>
                Increment
            </button>
            <button type="button" onClick={props.onDecrement}>
                Decrement
            </button>
        </div>
    );
}
