import React, { Component } from 'react'

class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      unFilteredArray: ['easy', 'peezy', 'lemon', 'squeezy'],
      userInput: '',
      filteredArray: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.filterStrings = this.filterStrings.bind(this)
  }

  handleChange(val) {
    this.setState({ userInput: val }, this.filterStrings)
  }

  filterStrings() {
    const { unFilteredArray, userInput } = this.state
    const filteredArray = unFilteredArray.filter(function(element) {
      return element.includes(userInput)
    })
    this.setState({ filteredArray })
  }

  render() {
    console.log(this.state)
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} />
        <button className="confirmationButton" onClick={this.filterStrings} />
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    )
  }
}
export default FilterString
