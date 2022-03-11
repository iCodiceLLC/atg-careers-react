import React from 'react'
import { Input } from 'antd'
import TextAreaStyles from './textArea.scss'
const { TextArea } = Input
export const ATGFTextArea = (props) => {
  return (
    <TextArea
      {...props}
      placeholder={props.placeholder}
      className={`${TextAreaStyles.atgf_text_area} ${props.className ?? ''}`}
      style={{ ...props.style }}
      autoSize={props.autoSize}
    />
  )
}
