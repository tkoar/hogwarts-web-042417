import React from 'react'

export default class HogDetails extends React.Component {

  render() {
    return (
      <div>Hog Details:
        <p>Specialty: {this.props.details.specialty}</p>
        {this.props.details.greased && <p>Greased and ready to play!!</p>}
        <p>Weight: {this.props.details.weight}</p>
        <p>Medal: {this.props.details.medal}</p>
      </div>
    )
  }

}
