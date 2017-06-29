import React from 'react'
import Hogs from '../porkers_data'
import HogTile from './HogTile'

export default class HogList extends React.Component {
  constructor() {
    super()

    this.state = {
      weight: false,
      isGreased: false,
      name: false
    }
  }


  sortByGreased(piggies) {
    return piggies.filter((hog) => hog.greased)
  }

  sortByProp(piggies, prop) {
    var sortedHogs = this.sortHogs(piggies, prop)
    return sortedHogs
  }

  sortHogs(piggies, sortBy) {
    if (sortBy === 'weight') {
      sortBy = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    }
    var sortProp = sortBy
    return piggies.sort((a, b) => {
      if (a[`${sortProp}`] > b[`${sortProp}`]) {
        return 1
      } else if (a[`${sortProp}`] < b[`${sortProp}`]) {
        return -1
      } else if (a[`${sortProp}`] === b[`${sortProp}`]) {
        return 0
      }
    })
  }

  getAllPiggies() {
    const allHoggies = Hogs
    if (this.state.weight) {
      return this.renderTiles((this.sortByProp(allHoggies, "weight")))
    } else if (this.state.name) {
      return this.renderTiles((this.sortByProp(allHoggies, "name")))
    } else if (this.state.isGreased) {
      return this.renderTiles((this.sortByGreased(allHoggies)))
    } else {
      return this.renderTiles(allHoggies)
    }
  }

  renderTiles(piggies) {
    return piggies.map((hog, index) => <HogTile key={hog.name + index} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} medal={hog['highest medal achieved']}  />)
  }

  changeState(event) {
    if (event.target.value === 'weight') {
      this.setState({
        weight: true,
        name: false,
        isGreased: false
      })
    } else if (event.target.value === 'name') {
        this.setState({
          weight: false,
          name: true,
          isGreased: false
        })
      } else if (event.target.value === 'greased') {
          this.setState({
            weight: false,
            name: false,
            isGreased: true
          })
        }
      }

  render() {
    const allHogs = this.getAllPiggies()
    return (
      <div>
      <button onClick={this.changeState.bind(this)} value='name'>Click here to sort by name!</button>
      <button onClick={this.changeState.bind(this)} value='weight'>Click here to sort by weight!</button>
      <button onClick={this.changeState.bind(this)} value='greased'>Click here to show only the greasy pigs!</button>
        {allHogs}
      </div>
    )
  }
}
