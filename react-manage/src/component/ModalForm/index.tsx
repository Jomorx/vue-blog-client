import { Button, Form, Input, Modal, Radio, Switch } from "antd";
import React, { useEffect, useState } from "react";
import UploadImg from "../UploadImg";
import { FormItem, ModalInfoType } from "./types";
interface IProps {
  visible: boolean;
  ModalInfo: ModalInfoType;
}
const switchRender = (type: string, item: FormItem, form: any) => {
  switch (type) {
    case "input": {
      return <Input></Input>;
    }
    case "textarea": {
      return <Input type="textarea"></Input>;
    }
    case "upload": {
      return <UploadImg></UploadImg>;
    }
    case "ButtonWithPopover": {
      return item.popoverItem!(item, form);
    }
    case "switch": {
      return (
        <Switch
          // onChange={(checked, e) => {
          //   form.setFieldsValue({
          //     isTop: checked ? 1 : 0,
          //   });
          // }}
        ></Switch>
      );
    }
  }
};
const CollectionCreateForm: React.FC<IProps> = ({ visible, ModalInfo }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      destroyOnClose={true}
      visible={visible}
      title={ModalInfo.title}
      okText="确定"
      cancelText="取消"
      onCancel={ModalInfo.onCancel}
      // forceRender
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log(values);
            
            // form.resetFields();
            // ModalInfo.onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        preserve={false}
        form={form}
        layout="horizontal"
        name="form_in_modal"
      >
        {ModalInfo.formItem.map((item: FormItem) => {
          return (
            <Form.Item
              key={item.name}
              name={item.name}
              label={item.label}
              rules={item.rules}
              initialValue={item.initialValue}
              valuePropName={item.valuePropName}
              getValueFromEvent={item.getValueFromEvent}
            >
              {switchRender(item.type, item, form)}
            </Form.Item>
          );
        })}
       
      </Form>
    </Modal>
  );
};
export default CollectionCreateForm;
