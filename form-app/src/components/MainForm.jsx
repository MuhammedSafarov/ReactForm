import React from "react";
import { Form, Input } from "antd";

const MainForm = () => {
  return (
    <div className="form-container">
      <Form>
        <Form.Item name="firstName" label="Firs Name">
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Type your surname" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item name="number" label="Phone">
          <Input placeholder="Type your surname" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default MainForm;
