import React from "react";

class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }
  componentDidMount() {
    this.updateCount();
    // console.log('mounted')
  }
  updateCount() {
    let count = this.state["count"];
    count += 1;
    this.setState({ count: count });
    setTimeout(this.updateCount, 500);
  }
  clicked() {
    console.log("I was clicked!");
  }
  render() {
    let remainder = this.state.count % this.props.text.length+1
    let text = this.props.text.slice(0,remainder);
    //if (this.state.count % 2) {
    //  text = "";
    //}

    return (
      <div onClick={() => this.clicked()}>
        <h4>{this.state.count}</h4>
        <h1>{text}</h1>
      </div>
    );
  }
}
export default TypeWriter;
