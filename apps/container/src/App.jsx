import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteHeader = React.lazy(() => import("remoteheader/Header"));
const RemoteButton = React.lazy(() => import("remotebutton/Button"));

export const App = () => {
  const [count, setCounter] = useState(0);
  const onClickHandler = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div style={{ background: "#f2f2f2", padding: 20 }}>
      <h1>This is the Container!</h1>
      <br />
      <h2>Remote Header:</h2>
      <ErrorBoundary>
        <RemoteHeader clickAmount={count} />
      </ErrorBoundary>
      <br />
      <h2>Remote Button:</h2>
      <ErrorBoundary>
        <RemoteButton onClick={onClickHandler} />
      </ErrorBoundary>
      <br />
      <a href="http://localhost:3001">Link to Remote Header</a>
    </div>
  );
};

export default App;
