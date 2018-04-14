// @flow

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import CaseOne from './case1'
import CaseTwo from './case2'
import Case3 from './case3'
import Case4 from './case4'

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Fragment>
      <div className='testcase'>
        <CaseOne />
      </div>
      <div className='testcase'>
        <CaseTwo />
      </div>
      <div className='testcase'>
        <Case3 />
      </div>
      <div className='testcase'>
        <Case4 />
      </div>
    </Fragment>,
    root
  )
}

(function() {
console.group('Baron diagnosis')
var baronRoots = document.querySelectorAll('[data-baron-v-id]')
console.log('Total barons found: ', baronRoots.length)
baronRoots.forEach(function(el, i) {
  var scroller = el.children[0]
  console.group('Baron root ' + i)
  console.log('Root: ', el)
  console.log('Maybe scroller: ', scroller);
  console.log('Root data: ', {
    scrollHeight: el.scrollHeight,
    offsetHeight: el.offsetHeight,
    overflow: el.style.overflow,
    clientWidth: el.clientWidth,
    offsetWidth: el.offsetWidth,
  })
  console.log('Scroller data: ', {
    scrollHeight: scroller.scrollHeight,
    offsetHeight: scroller.offsetHeight,
    clientWidth: scroller.clientWidth,
    offsetWidth: scroller.offsetWidth,
  })
  console.groupEnd()
})
})()
