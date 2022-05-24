import React from "react";
import { createRoot } from "react-dom/client";
import LogRocket from "logrocket";

import { App } from "./App";

LogRocket.init("kzfrph/worktime");
LogRocket.identify("THE_USER_ID_IN_YOUR_APP", {
  name: "Krzysztof",
  email: "krysztofzur21@gmail.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
});

const root = createRoot(document.getElementById("root"));
root.render(<App />);
