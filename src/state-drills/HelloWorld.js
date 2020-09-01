import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    super() 
    this.state = {
      who: "world",
    }
  }
  handleButtonClick = (e) => {
    this.setState({who: e.currentTarget.value})
  }
  render() {
    return <div>
            <p>Hello, {this.state.who}</p>
            <button onClick={this.handleButtonClick} value="World">World</button>
            <button onClick={this.handleButtonClick} value="Friend">Friend</button>
            <button onClick={this.handleButtonClick} value="React">React</button>
          </div>
  }
}



export default HelloWorld