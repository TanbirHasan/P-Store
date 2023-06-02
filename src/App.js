import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import ColorProvider from "./context/ColorProvider";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ColorProvider>
          <RouterProvider router={router} />
        </ColorProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
