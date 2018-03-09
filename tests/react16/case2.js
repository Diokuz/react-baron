import React, { Component } from 'react'
import Baron from '../../src/component'

export default class Case2 extends Component {
  render() {
    return (
      <Baron params={{ direction: 'h' }}>
        <div style={{ height: '100px', width: '300%' }}>
          Baron is a title of nobility. In the kingdom of England, the medieval Latin word baro, baronis was used originally to denote a tenant-in-chief of the early Norman kings who held his lands by the feudal tenure of "barony" (in Latin per baroniam), and who was entitled to attend the Great Council which by the 13th century had developed into the Parliament of England.

          The title was quite common in most European countries often in a slightly modified form. In Italian, the word used was Barone. The corresponding title in the Holy Roman Empire was Freiherr.
        </div>
      </Baron>
    )
  }
}
