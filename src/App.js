import { PageRoutes } from "./Routes/Routes";

import "./assets/index.scss";
import { AccessProvider } from "./context/AccessContext";

export const App = () => {
  return (
    <div className="App">
      <AccessProvider>
        <PageRoutes />
      </AccessProvider>
    </div>
  );
}
