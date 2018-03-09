import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import CaseOne from './case1'
import CaseTwo from './case2'
import Case3 from './case3'

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
  </Fragment>,
  document.getElementById('root')
)
