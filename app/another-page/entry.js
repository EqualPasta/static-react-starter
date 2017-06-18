import React from 'react'
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
        counter: 0,
    }
  }

  render() {
    return (
      <div className="counter">
        <p onClick={()=>this.setState({counter: this.state.counter + 1})}>
          {this.state.counter}
        </p>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById('react-root-mount') );
