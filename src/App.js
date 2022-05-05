import React from "react";
import { PageRoutes } from "./Routes/Routes";
import { AccessProvider } from "./context/AccessContext";

import "./assets/index.scss";

export const App = () => {
  return (
    <div className="App">
      <AccessProvider>
        <PageRoutes />
      </AccessProvider>
    </div>
  );
};
