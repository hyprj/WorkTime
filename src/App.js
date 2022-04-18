import PageRoutes from "./Routes/Routes";

import "./Assets/index.scss";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
