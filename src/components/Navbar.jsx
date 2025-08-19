import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar py-4 flex items-center justify-between md:fixed md:top-0 md:w-full md:z-50 bg-white md:bg-white/80 md:backdrop-blur md:border-b border-gray-300">
      <div className="container flex items-center justify-between itemcs-center mx-auto px-4 py-4">
        <div className=" text-3xl font-bold logo">
          <h1 className="text-3xl font-bold opacity-90 bg-black text-white p-1 md:bg-transparent rounded-b-2xl md:text-black">
            My Portofolio
          </h1>
        </div>
        <ul
          className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 transform -translate-x-1/2 
      md:-translate-x-0  md:opacity-100 sm:bg-white backdrop-blur-md md::bg-transparent lg:bg-transparent p-4  rounded-b-2xl transition-all md:transition-none z-40
      ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
        >
          <li>
            <a href="#beranda" className="sm:text-lg text-base font-medium">
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className="sm:text-lg text-base font-medium">
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" className="sm:text-lg text-base font-medium">
              Proyek{" "}
            </a>
          </li>
          <li>
            <a href="#kontak" className="sm:text-lg text-base font-medium">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
