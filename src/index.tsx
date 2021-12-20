import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "@cbinsights/fds/lib/assets/all-styles.min.css";
import { v4 } from "uuid";

import { Button, Toaster } from "@cbinsights/fds/lib/components";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [id, setId] = React.useState("");
  const [toastInstance, setToastInstance] = React.useState({
    content: <label>toast 1</label>
  });

  const onDismiss = (txt: string) => {
    setIsOpen(false);
  };

  return (
    <div className="padding--all--m">
      <Button label="open toast" theme="blue" onClick={() => setIsOpen(true)} />
      <Button label="close toast" onClick={() => setIsOpen(false)} />
      <Button
        label="new toast"
        theme="blue"
        onClick={() => {
          setId(v4());
        }}
      />
      <Toaster
        isOpen={isOpen}
        id={id}
        onDismiss={onDismiss}
        toastInstance={toastInstance}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
