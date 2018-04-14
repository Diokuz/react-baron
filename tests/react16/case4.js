// @flow

import React, { Component } from 'react'
import Baron from 'react-baron/dist/es5'

let lorem = 'Baron is a title of nobility. In the kingdom of England, the medieval Latin word baro, baronis was used originally to denote a tenant-in-chief of the early Norman kings who held his lands by the feudal tenure of "barony" (in Latin per baroniam), and who was entitled to attend the Great Council which by the 13th century had developed into the Parliament of England.'

export default class Case4 extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      showLorem: true,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ showLorem: !this.state.showLorem })
    }, 3000)
  }

  render() {
    return (
      <div style={{ height: '200px' }}>
        <Baron>
          <h1>Autohide</h1>
          {this.state.showLorem && `${lorem}${lorem}${lorem}`}
        </Baron>
      </div>
    )
  }
}
