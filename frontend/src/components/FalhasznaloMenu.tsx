import { useState, useRef, useEffect } from "react";

export default function FelhasznaloMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-surface  sticky top-0 z-30 flex items-center justify-between px-3 py-3 sm:px-4 sm:py-4">
      <img src="/logo.png" alt="Logo" className="h-9 w-auto sm:h-12" />

      <div className="relative" ref={menuRef}>
        <button onClick={() => setOpen((prev) => !prev)}>
          <img
            src="/profile.png"
            alt="Profilkép"
            className="h-9 w-9 rounded-full object-cover sm:h-12 sm:w-12"
          />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 flex w-40 flex-col gap-2 rounded-lg border border-border bg-surface p-2 shadow-lg">
            <button
              role="switch"
              aria-checked={dark}
              onClick={() => setDark((prev) => !prev)}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-text hover:bg-surface-alt "
            >
              Téma
              <span
                className={`relative h-5 w-9 rounded-full transition-colors ${
                  dark ? "bg-dpd-red" : "bg-dpd-mid-grey"
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                    dark ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </span>
            </button>
            <button className="rounded-lg border border-dpd-red bg-dpd-red px-3 py-2 text-left text-white transition-colors hover:bg-white hover:text-dpd-red">
              Kijelentkezés
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
