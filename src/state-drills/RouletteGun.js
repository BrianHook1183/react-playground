import React from 'react';

class RouletteGun extends React.Component {
  // constructor() {
    // super()
    // this.
    state = {
      chamber: null,
      spinningTheChamber: false
    }
  // }
  clickHandler = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  messageLogic() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }
  render() {
    return (
          <div>
            <p>{this.messageLogic()}</p>
            <button onClick={this.clickHandler}>Pull the trigger</button>
          </div>
    )
  }
}


export default RouletteGun;