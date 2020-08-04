import { Component } from './ToyReact';

class Square extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;