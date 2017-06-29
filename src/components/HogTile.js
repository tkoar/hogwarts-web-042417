import React from 'react'
import HogDetails from './HogDetails'

export default class HogTile extends React.Component {
  constructor() {
    super()

    this.state = {
      visible: false,
      showTile: true
    }
  }

  showDetails(event) {
    if (this.state.visible) {
      this.setState({
        ...this.state,
        visible: false
      })
    } else {
      this.setState({
        ...this.state,
        visible: true
      })
    }
  }

  showTile() {
    if (!this.state.hidden) {
      this.setState({
        showTile: false
      })
    }
  }


  render() {
    var img = this.props.name.toLowerCase().replace(/ /g,'_')
    return (
      <div> 
        { this.state.showTile && <div>
          <button onClick={this.showTile.bind(this)}>HIDE!!!</button>
          <div onClick={this.showDetails.bind(this)}>
            <img alt='Piggo' src={require('../hog-imgs/' + img + '.jpg')} />
            <h1>{this.props.name}</h1>
            <div>
              {
                this.state.visible ?
                <HogDetails details={this.props}/> : null
              }
            </div>
          </div>
        </div> }
      </div>
    )
  }
}
