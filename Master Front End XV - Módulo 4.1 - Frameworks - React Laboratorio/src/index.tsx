import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { ListPage } from "./list";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<ListPage />);