import { useState, useEffect } from "react";
import "./MainForm.scss";
import { Button, Form, Input, Space } from "antd";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = useState(false);

  const val = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [val]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const MainForm = () => {
  const [clicked, setClicked] = useState(false);
  const [form] = Form.useForm();
  return (
    <div className="form-container">
      <Form
        className="form"
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        onSubmit={() => {
          setClicked(false);
        }}
      >
        <Form.Item
          name="firstName"
          label="Firs Name"
          className="form-item"
          hasFeedback
          validateStatus={`${clicked ? "success" : ""} `}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please input your surname!",
            },
          ]}
        >
          <Input placeholder="Type your surname" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please input your email adress with @ !",
            },
          ]}
        >
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="number"
          label="Phone"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input placeholder="Type your phone number" />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form} />
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MainForm;

