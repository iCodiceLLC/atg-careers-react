import React from 'react'
import './header.scss'
import { Row, Col } from 'antd'
import { motion } from 'framer-motion'

export const Header = (props) => {
  return (
    <Row justify="space-between" align="top" gutter={[24, 6]} className={'atgf_header'}>
      <Col xs={24} sm={6} md={4} lg={6} className={'atgf_logo'}>
        <a href="/">
          <motion.img
            whileHover={{
              scale: 1.03,
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src="https://settlementstatement.atgf.com/images/logo/ATG-logo.svg"
            alt="atgf-logo"
            width="auto"
          />
        </a>
      </Col>
      <Col xs={24} sm={18} md={props.showContactInfo ? 12 : 20} lg={props.showContactInfo ? 12 : 18} className={'atgf_page_title'}>
        <h1 className={'main_title'}>{props.title}</h1>
        {props.subTitle && <p className={'sub_title'}>{props.subTitle}</p>}
      </Col>
      {props.showContactInfo && (
        <Col xs={24} sm={24} md={8} lg={6} className={'atgf_contact_info'}>
          <h4>
            Questions? <br />
            Illinois: 800.252.0402 <br />
            Wisconsin: 800.788.8989
          </h4>
        </Col>
      )}
    </Row>
  )
}
