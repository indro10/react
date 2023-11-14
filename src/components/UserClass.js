import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //Imp function
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>Class Component</div>
        <div>{this.state.count}</div>
        <div>{}</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 }, () => {
              console.log(this.state.count);
            });
            console.log(this.state.count);
          }}
        >
          Inc
        </button>
        <button onClick={() => {}}>Dec</button>
      </div>
    );
  }
}

export default UserClass;
