import React from "react";
import { createRoot } from "react-dom/client";
import { Regression } from "./Regression";
import "./styles.css";
import { TemplatesFixture } from "./Templates";
import { DropdownFixture } from "./Dropdown";
createRoot(document.getElementById("root")!).render(new URLSearchParams(location.search).get("component") === "dropdown" ? <DropdownFixture /> : new URLSearchParams(location.search).get("component") === "templates" ? <TemplatesFixture /> : <Regression component={new URLSearchParams(location.search).get("component") || "buttons"} />);
