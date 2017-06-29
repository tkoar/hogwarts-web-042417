import React from 'react'

export default class HogTile extends React.Component {

  render() {

    return (
      <div>
        <img alt='Piggo' src={require(`../hog-imgs/${this.props.name.toLowerCase().replace(/ /g,'_').jpg}`)} />
        <h1>{this.props.name}</h1>
        <div>Hog Details:
          <p>Specialty: {this.props.specialty}</p>
          <p>Greased: {this.props.greased}</p>
          <p>Weight: {this.props.weight}</p>
          <p>Medal: {this.props.medal}</p>
        </div>
      </div>
    )
  }
}
