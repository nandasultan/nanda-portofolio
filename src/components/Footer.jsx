const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 sm:p-2 p-3 justify-between items-center">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="hidden md:flex gap-7">
          <a href="#beranda">Home</a>
          <a href="#tentang">About</a>
          <a href="#proyek">Project</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#">
            <i className="ri-github-fill ri-2x"></i>
            <i className="ri-instagram-fill ri-2x"></i>
            <i className="ri-reddit-fill ri-2x"></i>
            <i className="ri-youtube-fill ri-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
