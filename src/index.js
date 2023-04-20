import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { default as Checkbox } from "./Components/Molecules/Checkbox";
export { default as Switch } from "./Components/Molecules/Switch";
export { default as Avatar } from "./Components/Molecules/Avatar";
export { default as Badge } from "./Components/Molecules/Badge";
export { default as Button } from "./Components/Button";
export { default as IconButton } from "./Components/IconButton";
export { default as InputField } from "./Components/InputField";
export { default as OptionList } from "./Components/OptionList";
export { default as StatusIndicator } from "./Components/Molecules/StatusIndicator";
export { default as Select } from "./Components/Select";
export { default as Combobox } from "./Components/Combobox";
export { default as Menu } from "./Components/Menu";
