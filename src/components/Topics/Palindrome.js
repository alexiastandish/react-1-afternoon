import React, { Component } from 'react'

class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
      palindrome: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.isPalindrome = this.isPalindrome.bind(this)
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  isPalindrome() {
    console.log(this.state)
    const { userInput } = this.state
    const userInputArray = this.state.userInput
      .split('')
      .reverse()
      .join('')

    if (userInput === userInputArray) {
      this.setState({ palindrome: 'true' })
    } else {
      this.setState({ palindrome: 'false' })
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} />
        <button className="confirmationButton" onClick={this.isPalindrome}>
          Submit
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome
