import React, { Component } from 'react'

class Sum extends Component {
  constructor() {
    super()

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      sum: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeTwo = this.handleChangeTwo.bind(this)
    this.computeSum = this.computeSum.bind(this)
  }

  handleChange(val) {
    this.setState({ numberOne: val })
  }
  handleChangeTwo(val) {
    this.setState({ numberTwo: val })
  }

  computeSum() {
    const { numberOne, numberTwo } = this.state
    const newSum = parseInt(numberOne, 10) + parseInt(numberTwo, 10)

    this.setState({ sum: newSum })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} />
        <input className="inputLine" onChange={event => this.handleChangeTwo(event.target.value)} />
        <button className="confirmationButton" onClick={this.computeSum} />
        <span className="resultsBox"> Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum
