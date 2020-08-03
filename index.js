import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hello </span>
        <span>ToyReact</span>
        <span>!</span>
        {this.children}
      </div>
    );
  }
}

const e = (
  <MyComponent id="id-1">
    <div>This is a child</div>
  </MyComponent>
);

ToyReact.render(e, document.body);

