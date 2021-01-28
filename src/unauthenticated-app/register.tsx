import { useAuth } from "context/auth-context";
import React from "react";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app/index";
import { useAsync } from "utils/use-async";

const usernameRules = [{ required: true, message: "请输入用户名" }];
const passwordRules = [{ required: true, message: "请输入密码" }];
const cpasswordRules = [{ required: true, message: "请输入密码" }];

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    try {
      if (cpassword !== values.password) {
        onError(new Error("两次密码不一致"));
        return;
      }
      await run(register(values));
    } catch (e) {
      onError(e);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={usernameRules}>
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" rules={passwordRules}>
        <Input placeholder="密码" type="password" />
      </Form.Item>
      <Form.Item name="cpassword" rules={cpasswordRules}>
        <Input placeholder="确认密码" type="password" />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
