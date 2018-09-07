import React, { Component } from 'react'

class FilterObjects extends Component {
  constructor() {
    super()

    this.state = {
      food: [
        { mexicanFood: 'nachos' },
        { chinese: 'orange chicken' },
        { hawaiin: 'poke' },
        { mexicanFood: 'churros' },
        { chinese: 'edomame' },
        { hawaiin: 'pineapple cake' },
        { american: 'hotdog' },
        { american: 'burger' },
        { american: 'redvelvet cupcake' },
        { hawaiin: 'pineapples' },
      ],
      userInput: '',
      filteredArray: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.arrayFilter = this.arrayFilter.bind(this)
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  arrayFilter() {
    const { food, userInput } = this.state
    let newArr = food.filter(e => {
      for (let key in e) {
        if (key === userInput) {
          return true
        }
      }
    })

    this.setState({ filteredArray: newArr })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.food, null, 10)}</span>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} />
        <button className="confirmationButton" onClick={this.arrayFilter} />
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    )
  }
}

export default FilterObjects
