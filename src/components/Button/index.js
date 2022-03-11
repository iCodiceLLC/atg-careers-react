import React from 'react'
import { Button } from 'antd'
import ButtonStyles from './button.scss'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const ATGFButton = ({ hoveranimation, ...props }) => {
  const btn = (
    <Button
      {...props}
      className={`
               ${{ ...props.className }}
               ${ButtonStyles.atgf_button}
               ${props.size === 'large' ? ButtonStyles.atgf_button_large : ''}
               ${ButtonStyles.atgf_btn_default}
         `}
      style={{ color: props.textColor, backgroundColor: props.backgroundcolor, ...props.style }}
    >
      {props.children}
    </Button>
  )

  return hoveranimation ? (
    <motion.div
      whileHover={{
        boxShadow: '0px 12px 18px rgba(34, 149, 255, 0.4)',
        transform: 'translateY(-2px)',
        transition: {
          duration: 0.3,
        },
      }}
    >
      {btn}
    </motion.div>
  ) : (
    btn
  )
}

ATGFButton.propTypes = {
  hoveranimation: PropTypes.bool,
}
