import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ParkoloProvider from "./contexts/ParkoloContext";
import ParkolokPage from "./pages/ParkolokPage";

function App() {
  return (
    <ParkoloProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ParkolokPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ParkoloProvider>
  );
}

export default App;