import { Outlet } from "react-router";
import FelhasznaloMenu from "../components/FalhasznaloMenu";

function MainLayout() {
  return (
    <div className="Main">
      {/* <header className="sticky top-0 z-30 flex items-center justify-between bg-dpd-warm-grey px-3 py-3 sm:px-4 sm:py-4">
        <img src="/logo.png" alt="Logo" className="h-9 w-auto sm:h-12" />

      </header> */}
      <FelhasznaloMenu/>
      <Outlet />
      <footer className="bg-surface fixed inset-x-0 bottom-0 p-4 text-center">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
      </footer>
    </div>
  );
}

export default MainLayout;