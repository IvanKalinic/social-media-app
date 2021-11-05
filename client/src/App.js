import PageRoutes from "./routes";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <PageRoutes />
    </AuthContextProvider>
  );
};

export default App;
