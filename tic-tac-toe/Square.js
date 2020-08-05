import { ToyReact, Component } from '../ToyReact';

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value || ''}
      </button>
    );
  }
}

export default Square;