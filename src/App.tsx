import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FontChecker from "./pages/FontChecker";
import ColorPallete from "./pages/ColorPallete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index  element={<div className="info-page">Home Page</div>}/>
        <Route path="/font-checker" element={<FontChecker />} />
        <Route path="/color-pallete" element={<ColorPallete />} />

        <Route path="*" element={<div className="info-page danger">404, Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
