import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FontChecker from "./pages/FontChecker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index  element={<div>Home Page</div>}/>
        <Route path="/font-checker" element={<FontChecker />} />
        <Route path="*" element={<div>404, Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
