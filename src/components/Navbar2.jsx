import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 fixed top-0 transition-all ${
        isScrolled ? "bg-white/80 backdrop-blur border-b border-gray-300" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">My Portofolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#tentang">Tentang</a>
          </li>
          <li>
            <a href="#proyek">Proyek</a>
          </li>
          <li>
            <a href="#kontak">Kontak</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-3xl">
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col text-center text-base font-medium bg-transparent border-t border-gray-200 shadow transition-all duration-300 animate-slide-down">
          {["Beranda", "Tentang", "Proyek", "Kontak"].map((item) => (
            <li key={item} className="border-b border-gray-300 py-3">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full hover:text-zinc-500 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
