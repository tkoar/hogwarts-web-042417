import React from 'react'
import Hogs from '../porkers_data'
import HogTile from './HogTile'

export default class HogList extends React.Component {
  constructor() {
    super()

    this.state = {
      filters: {
        greased: ''
      }
    }
  }

  render() {
    const allHogs = Hogs.map(hog => <HogTile name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} medal={hog['highest medal achieved']} />)
    return (
      <div>
        {allHogs}
      </div>
    )
  }
}
