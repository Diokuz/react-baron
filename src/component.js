// @flow

import React, { Component } from 'react'
import baron from 'baron'
import s from './styles.css'

console.log('s', s);

const defaultBaronParams = {
  barOnCls: s.baron,
  direction: 'v'
}

export default class Baron extends Component {
  static defaultProps = {
    clipperCls: s.clipper,
    scrollerCls: s.scroller,
    trackCls: s.track,
    barCls: s.bar,
    hModifier: s._h
  }

  baronParams = {}

  componentDidMount() {
    this.baronParams = {
      root: this.clipper,
      scroller: this.scroller,
      track: this.track,
      bar: this.bar
    }

    for (var key in this.props.params) {
      // You cant pass dom nodes params (because they are dynamic react refs)
      if (!this.baronParams[key]) {
        this.baronParams[key] = this.props.params[key]
      }
    }

    for (var key2 in defaultBaronParams) {
      if (!this.baronParams.hasOwnProperty(key2)) {
        this.baronParams[key2] = defaultBaronParams[key]
      }
    }

    this.baron = baron(this.baronParams)
  }

  componentDidUpdate() {
    this.baron.update()
  }

  componentWillUnmount() {
    this.baron.dispose()
  }

  render() {
    let { clipperCls, scrollerCls, barCls, trackCls, hModifier, params = {}, children } = this.props

    if (params.direction === 'h') {
      barCls += ' ' + hModifier
      trackCls += ' ' + hModifier
    }

    return (
      <div className={clipperCls} ref={r => this.clipper = r}>
        <div className={scrollerCls} ref={r => this.scroller = r}>
          {children}
          <div className={trackCls} ref={r => this.track = r}>
            <div className={barCls} ref={r => this.bar = r} />
          </div>
        </div>
      </div>
    )
  }

  // External API

  scrollToLast() {
    const scroll = this.baronParams.direction === 'v' ? 'scrollTop' : 'scrollLeft'
    const size = this.baronParams.direction === 'v' ? 'scrollHeight' : 'scrollWidth'

    this.scroller[scroll] = this.scroller[size]
  }

  getScroller() {
    return this.scroller
  }

  getClipper() {
    return this.clipper
  }
}
