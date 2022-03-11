import React from 'react';
import { Select } from 'antd';
import SelectStyles from './select.scss'


export const ATGFSelect = (props) => {
   return (
      <Select
         {...props}
         placeholder={props.placeholder}
         className={`${SelectStyles.atgf_select} ${props.className ?? ''}`}
         style={{ ...props.style }}
         options={props.options}
      >
         {props.children}
      </Select>
   )
}