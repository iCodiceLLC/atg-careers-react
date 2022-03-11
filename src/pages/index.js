import React, { useState } from 'react'
import { Panel, Input, Form, Select, Colors, Button } from 'atg-package'
import 'atg-package/dist/index.css'
import { Row, Col } from 'antd'
import { motion } from 'framer-motion'
import { ATGFRadio } from '../components/Radio'
import ReCAPTCHA from 'react-google-recaptcha'
export default function HomePage(props) {
  function onCaptcha(value) {
    console.log('Captcha value:', value)
  }

  const [formRef] = Form.createFormRef()
  const [sponsorship, setSponsorship] = useState('Yes')
  const onChange = () => {
    setSponsorship('No')
  }
  const pageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  }
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ background: '#E7EFF6', marginBottom: 55 }}
      className="opening-page "
    >
      <Row justify="center">
        <Col xs={22} sm={23} md={20} lg={16}>
          <h2 style={{ margin: '30px 0 2px 0', letterSpacing: '0px' }} className="sub_title">
            Help us get to know you by completing the application below and sharing your resume. Rest assured we will handle all your information with
            the utmost privacy and security.
          </h2>
          <div className="text-gray-700 text-16 mb-2 font-semibold">All * are required fields.</div>
          <Panel>
            <Form.Wrap form={formRef}>
              <Col span={24} className="font-bold text-22 mb-2">
                Personal Information
              </Col>
              <Row gutter={[20, 0]} justify="space-between" align="bottom">
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="firstName" label="First Name">
                    <Input placeholder="Enter First Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="lastName" label="Last Name">
                    <Input placeholder="Enter Last Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="phoneNumber" label="Phone Number">
                    <Input placeholder="Enter Phone Number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="email" label="Email">
                    <Input placeholder="Enter Email" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="City" label="City">
                    <Input placeholder="Enter City" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="State" label="State">
                    <Select placeholder="Select State" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Wrap>
          </Panel>
          <Panel>
            <Form.Wrap form={formRef}>
              <Col span={24} className="font-bold text-22 mb-2">
                Professional Information
              </Col>
              <Row gutter={[20, 0]} justify="space-between" align="bottom">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item required={true} name="sponsorship" label="Do you require sponsorship to work in the U.S.?">
                    {/* <Radio.Group onChange={onChange} value={sponsorship} defaultValue="Yes" className="atgf_radio">
                      <Radio value={'Yes'}>Yes</Radio>
                      <Radio value={'No'}>No</Radio>
                    </Radio.Group> */}
                    <ATGFRadio
                      onChange={onChange}
                      value={sponsorship}
                      options={[
                        { value: 1, label: 'Yes' },
                        { value: 2, label: 'No' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="postion" label="What role are you applying for?">
                    <Select placeholder="Select Open Position" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item required={true} name="phoneNumber" label="LinkedIn">
                    <Input placeholder="Enter Linkedin URL" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24}>
                  <Form.Item required={true} name="email" label="Why are you the best applicant for the job?">
                    <Input placeholder="Enter Answer" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Wrap>
          </Panel>
          <Panel>
            <Col span={24} className="font-bold text-22 mb-2">
              Supporting Documents
            </Col>
            <Col span={24} className="font-bold text-22 mb-2">
              <Button
                textColor={Colors.white}
                backgroundcolor={Colors.lightBlue}
                style={{ width: '100%' }}
                className="atgf_button_large"
                hoveranimation
                size="large"
              >
                Upload Resume
              </Button>
            </Col>
          </Panel>
          <div className="flex justify-center mb-5">
            <ReCAPTCHA sitekey="6Lf3d6ceAAAAAPoOx4iZmn3DH8OVEWMM1qPvX62s" onChange={onCaptcha} />
          </div>
          <Col span={24}>
            {' '}
            <Button
              style={{ marginBottom: 50 }}
              textColor={Colors.white}
              backgroundcolor={Colors.blue}
              className="atgf_button_large"
              hoveranimation
              size="large"
            >
              Submit
            </Button>
          </Col>
        </Col>
      </Row>
    </motion.div>
  )
}
