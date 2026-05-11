import React, { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
     static getDerivedStateFromError(error:Error) {
    return { hasError: true };
  }
   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error
  }
  render() {
    if (this.state.hasError) {
      return <div>
        {this.props.children}
        <h1 className="flex justify-center m-6">Что-то пошло не так.</h1>;
      </div>
      
    }

    return this.props.children; 
  }
}
export default ErrorBoundary