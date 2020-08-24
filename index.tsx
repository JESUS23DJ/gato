import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

interface AppProps {}
interface AppState {
  name: string;
}
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }
  //un componente solo puede leler los componenetes no los puede editar esto sig que si lo editas se actualza al momento
  render() {
    return <div />;
  }
}

render(<App />, document.getElementById("root"));
