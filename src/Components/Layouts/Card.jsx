import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Name: {this.props.userName}</h2>
        <h3>Address: {this.props.address}</h3>
        <p>Goal: {this.props.goal}</p>
        <button className='btn btn-warning p-3' onClick={this.props.edit}>
            Delete
        </button>
      </div>
    )
  }
}
