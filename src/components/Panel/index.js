import React from 'react'
import PanelStyles from './panel.scss'

export const ATGFPanel = (props) => {
  return (
    <div
      className={`${PanelStyles.atgf_panel} ${props.className ?? ''}`}
      style={{ ...props.style }}
    >
      <h1 className={PanelStyles.panel_title}>{props.title}</h1>
      {/*  <div className={PanelStyles.panel_title_divider}><span /></div> */}
      {props.children}
    </div>
  )
}
