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

export { Checkbox } from "./Components/Molecules/Checkbox";
export { Switch } from "./Components/Molecules/Switch";
export { Avatar } from "./Components/Molecules/Avatar";
export { Badge } from "./Components/Molecules/Badge";
export { Button } from "./Components/Button";
export { IconButton } from "./Components/IconButton";
export { InputField } from "./Components/InputField";
export { OptionList } from "./Components/OptionList";
export { StatusIndicator } from "./Components/Molecules/StatusIndicator";
export { Select } from "./Components/Select";
export { Combobox } from "./Components/Combobox";
export { Menu } from "./Components/Menu";
