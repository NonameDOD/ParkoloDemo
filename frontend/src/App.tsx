import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";
import ParkoloProvider from "./contexts/ParkoloContext";
import ParkolokPage from "./pages/ParkolokPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <ParkolokPage /> },
    ],
  },
]);

function App() {
  return (
    <ParkoloProvider>
      <RouterProvider router={router} />
    </ParkoloProvider>
  );
}

export default App;