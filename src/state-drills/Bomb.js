import React from 'react';

class Bomb extends React.Component {
  constructor () {
    super()
    this.state = {
      message: "Bomb Clock Started!",
      count: 0
    }
  }
  componentDidMount() {
  // console.log('Bomb componentDidMount ran')
  //  runs timer in background
  this.interval = setInterval(() => {
    const newCount = this.state.count + 1
    // Message state Logic
    let newMessage;
    if (newCount >= 8) {
      newMessage = "Boom!!!";
      // How do i get componentWillUnmount to run when this condition is met?
      clearInterval(this.interval);
    } else if (newCount % 2 === 0) {
      newMessage = "Tick";
    } else {
      newMessage = "Tock";
    }
    // Update both states
    this.setState({
      count: newCount,
      message: newMessage
    })
  }, 1000)
}

// Not sure what this is doing
componentWillUnmount() {
    // console.log('Bomb componentWillUnmount ran')
    clearInterval(this.interval)
  }
  
  render() {
    // console.log('Bomb setInterval',this.state.count, this.state.message)
    return  <div>
              <p>{this.state.message}</p>
            </div>
  }
}

export default Bomb;