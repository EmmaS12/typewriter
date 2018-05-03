import React from "react";
import { render } from "react-dom";
import TypeWriter from "./typewriter.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let text = this.props.text;
   
    return (
      <div>
        <TypeWriter text="Hello Emma you are awesome" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
