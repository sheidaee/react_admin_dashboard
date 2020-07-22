import React from 'react';
import PropTypes from 'prop-types';

class GlobalErrorBoundary extends React.Component {
  state = {
    error: null,
  };
  lastError = null;

  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidMount() {
    window.onerror = (msg, url, line, column, error) => {
      this.logError({ error });
    };
  }

  // getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted. For those use cases, use componentDidCatch() instead.

  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

  // error - The error that was thrown.
  // info - An object with a componentStack key containing
  componentDidCatch(error, errorInfo) {
    // if the error is sent, do not send it again
    if (this.lastError && this.lastError.message === this.state.error.message) {
      return true;
    }
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logComponentStackToMyService(errorInfo.componentStack);
    this.logError({ error, errorInfo });
  }

  async logError({ error, errorInfo }) {
    this.lastError = error;

    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI

      return <div>global.error.500</div>;
      // return (
      //   <Result500
      //     subTitle={<FormattedMessage id="global.error.500.subtitle" />}
      //     action={<FormattedMessage id="local.api.error.description" />}
      //   />
      // );
    }

    return this.props.children;
  }
}

GlobalErrorBoundary.propTypes = {
  children: PropTypes.element,
};

export default GlobalErrorBoundary;
