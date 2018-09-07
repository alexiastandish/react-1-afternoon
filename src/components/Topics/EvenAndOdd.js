import React, { Component } from 'react'

class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.assignEvenAndOdds = this.assignEvenAndOdds.bind(this)
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  assignEvenAndOdds() {
    const { userInput } = this.state
    let arr = userInput.split(',')
    let evens = []
    let odds = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10))
      } else {
        odds.push(parseInt(arr[i], 10))
      }
    }
    console.log(evens)
    this.setState({ evenArray: evens, oddArray: odds })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={e => this.handleChange(e.target.value)} />
        <button className="confirmationButton" onClick={this.assignEvenAndOdds}>
          Split
        </button>

        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd
