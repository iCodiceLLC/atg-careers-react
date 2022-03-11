import React from 'react';
import { InputNumber, Input } from 'antd';
import InputStyles from './input.scss';


export const ATGFInput = (props) => {


   const formatValue = value => {
      if ((props.type === 'price'))
         return (
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
         )

      return value
   }


   if (props.type)
      return (
         <InputNumber
            placeholder={props.placeholder + 'a'}
            defaultValue={0.00}
            formatter={value => formatValue(value)}
            // parser={value => value.replace(/\$\s?|(,*)/g, '')}
            className={`${InputStyles.atgf_input_number} ${props.className ?? ''}`}
            style={{ ...props.style }}
            type={props.type}
         />
      )


   return (
      <Input
         {...props}
         placeholder={props.placeholder}
         className={`${InputStyles.atgf_input} ${props.className ?? ''}`}
         style={{ ...props.style }}
         type={props.type}
      />
   )
}