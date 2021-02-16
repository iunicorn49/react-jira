import React, { PropsWithChildren, ReactElement } from "react";

type FallbackRender = (props: { error: Error | null }) => ReactElement;

interface ErrorBoundaryProps {
  fallbackRender: FallbackRender;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state = {
    error: null,
  };
  // 当子组件抛出异常, 这里会接收到, 并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    } else {
      return children;
    }
  }
}
