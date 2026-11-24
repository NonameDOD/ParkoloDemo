import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="Main">
      <header className="bg-dpd-warm-grey p-4">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
      </header>
      <Outlet />
      <footer className="bg-dpd-warm-grey text-white p-4 text-center">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
      </footer>
    </div>
  );
}

export default MainLayout;