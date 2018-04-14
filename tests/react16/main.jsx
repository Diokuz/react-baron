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
