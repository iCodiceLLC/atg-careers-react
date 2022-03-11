import React from 'react'
import './footer.scss'
import moment from 'moment'
export const Footer = (props) => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #03396c, #283655)',
        textAlign: 'center',
        fontSize: '16px',
      }}
      className={'footer'}
    >
      Visit us at
      <a
        style={{
          color: '#2e6aa2',
        }}
        href="https://www.atgf.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        www.atgf.com
      </a>
      <br />© Copyright {moment().format('YYYY')} ATG
    </div>
  )
}
