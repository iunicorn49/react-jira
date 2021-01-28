import { useAuth } from "context/auth-context";
import React from "react";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app/index";

const usernameRules = [{ required: true, message: "请输入用户名" }];
const passwordRules = [{ required: true, message: "请输入密码" }];

export const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={usernameRules}>
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" rules={passwordRules}>
        <Input placeholder="密码" type="password" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
