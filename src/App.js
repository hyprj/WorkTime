import PageRoutes from "./Routes/Routes";

import "./assets/index.scss";
import { AccessProvider } from "./context/AccessContext";

function App() {
  return (
    <div className="App">
      <AccessProvider>
        <PageRoutes />
      </AccessProvider>
    </div>
  );
}

export default App;
