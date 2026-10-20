import React from "react";
import { createRoot } from "react-dom/client";
import { Regression } from "./Regression";
import "./styles.css";
createRoot(document.getElementById("root")!).render(<Regression component={new URLSearchParams(location.search).get("component") || "buttons"} />);
