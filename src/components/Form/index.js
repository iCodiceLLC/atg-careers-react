import React from 'react'
// import { ATGFForm } from './form';
// import { ATGFFormRef as createFormRef } from './form-ref';
import FormStyles from './form.scss'
import { Form } from 'antd'

const ATGFFormItem = (props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      required={props.required}
      rules={props.rules}
    >
      {props.children}
    </Form.Item>
  )
}

const ATGFForm = (props) => {
  return (
    <Form
      layout='vertical'
      form={props.form}
      labelAlign={props.labelAlign ?? 'right'}
      scrollToFirstError={props.scrollToFirstError ?? false}
      onFinish={props.onFinish}
      className={FormStyles.atgf_form}
    >
      {props.children}
    </Form>
  )
}

const ATGFFormRef = () => {
  return Form.useForm()
}

const ATGFFormList = (props) => {
  return <Form.List name={props.name}>{props.children}</Form.List>
}

const form = {
  Wrap: ATGFForm,
  createFormRef: ATGFFormRef,
  List: ATGFFormList,
  Item: ATGFFormItem
}

export { form }
