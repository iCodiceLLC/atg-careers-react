import React from 'react'
import { Radio } from 'antd'
import './radio.scss'

export const ATGFRadio = (props) => {
  return (
    <Radio.Group
      onChange={props.onChange}
      value={props.value}
      defaultValue={props.defaultValue}
      {...props}
      className={`atgf_radio ${props.className ?? ''}`}
    >
      {props.options.map((el) => {
        return <Radio value={el.value}>{el.label}</Radio>
      })}
    </Radio.Group>
  )
}
