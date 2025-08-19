import DataImage, { listTools, listProyek } from "./data";
import {} from "./data";

function App() {
  return (
    <>
      <div className="pt-17 md:pt-24 md:hidden hidden lg:block">
        <div className="hero container mx-auto sm:px-20 px-5 grid md:grid-cols-2 item-center xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Ananda Sultan Hady Wibowo</h1>

            <p className="text-base/loose mb-6 opacity-50">
              Fresh graduate Teknik Informatika yang passionate dalam pengembangan perangkat lunak. Saya memiliki
              pengalaman dalam web development, mobile development, dan machine learning.
            </p>

            <div>
              <div className="flex items-center gap-3 mb-6 bg-zinc-200 w-fit h-20 p-4 rounded-2xl">
                <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
                <q>Kode yang indah, lahir dari ketekunan. ❤️</q>
              </div>
              <div className="items-center flex sm:gap-4 gap-2">
                <a
                  href="#kontak"
                  className=" text-white bg-[#6b7479] p-4 rounded-2xl hover:bg-zinc-400 hover:text-black "
                >
                  Download CV <i className="ri-arrow-down-long-fill ri-lg overflow-hidden"></i>
                </a>
                <a
                  href="#proyek"
                  className="text-white bg-[#2c2f30] p-4 rounded-2xl hover:bg-zinc-300 hover:text-black  "
                >
                  Lihat Proyek <i className="ri-arrow-down-long-fill ri-lg overflow-y-scroll"></i>
                </a>
              </div>
            </div>
          </div>
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className=" w-[400px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
            loading="lazy"
          />
        </div>
      </div>

      {/* HERO */}
      <div className="pt-17 md:pt-24 lg:hidden">
        <div className="hero container mx-auto sm:px-20 px-5 grid md:grid-cols-2 item-center xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Ananda Sultan Hady Wibowo</h1>
          </div>
          <div>
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className=" w-[400px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s lg:hidden"
              loading="lazy"
            />
          </div>
        </div>
        <div className="hero container  mx-auto sm:px-20 px-5 grid md:grid-cols-2 item-center xl:gap-0 gap-6 grid-cols-1">
          <div>
            <p className="text-base/loose sm:mb-6 mb-0 sm:mt-0 mt-6 opacity-50 sm:text-left text-justify">
              Fresh graduate Teknik Informatika yang passionate dalam pengembangan perangkat lunak. Saya memiliki
              pengalaman dalam web development, mobile development, dan machine learning.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-200 w-fit h-20 p-4 rounded-2xl">
              <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
              <q>Kode yang indah, lahir dari ketekunan. ❤️</q>
            </div>
            <div className="items-center flex sm:gap-4 gap-2 justify-center">
              <a
                href="/public/assets/CV-ATS-ANANDA.pdf"
                className=" text-white bg-[#6b7479] p-4 rounded-2xl hover:bg-zinc-400 hover:text-black "
                download={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <i className="ri-arrow-down-long-fill ri-lg"></i>
              </a>
              <a
                href="#proyek"
                className="text-white bg-[#2c2f30] p-4 rounded-2xl hover:bg-zinc-300 hover:text-black  "
              >
                Lihat Proyek <i className="ri-arrow-down-long-fill ri-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* HERO */}

      {/* TENTANG */}
      <div
        className="tentang animate__animated animate__fadeInUp animate__delay-4s sm:mt-0 lg:mt-10 py-10 sm:p-20 p-5"
        id="tentang"
      >
        <div
          className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-100 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <h1 className="text-4xl font-black text-center pb-5">About Me</h1>
          <p className="text-base/loose mb-10">
            Saya adalah lulusan Teknik Informatika dengan IPK 3.75 dari Universitas Indonesia. Selama kuliah, saya aktif
            dalam berbagai proyek pengembangan perangkat lunak dan organisasi kemahasiswaan. Saya memiliki passion yang
            kuat dalam teknologi web modern dan mobile development. Saya juga tertarik dengan bidang artificial
            intelligence dan machine learning, serta telah mengerjakan beberapa proyek research di bidang tersebut. Saat
            ini saya sedang mencari kesempatan untuk memulai karir profesional sebagai software developer dan
            berkontribusi dalam tim pengembangan yang dinamis.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Iamge" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1 font-bold">
                  15 <span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 font-bold">
                  3 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="container mx-auto tools sm:mt-0 mt-0 sm:px-15 px-5">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" dataaos-duration="1000" data-aos-once="true">
          Tools yang dipakai
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Tools yang biasa dipakai untuk pembuatan Websita ataupun Desain
        </p>
        <div className="tools-box sm:mt-14 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-200 rounded-md hover:bg-zinc-300 group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
            >
              <img src={tool.gambar} alt="Tools Image" className="w-14 p-4 group-hover:bg-zinc-300" loading="lazy" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* TOOLS */}

      {/* Proyek */}

      <section className="bg-black/5 sm:px-20 sm:mt-32 mt-20 px-5">
        <div id="proyek" className="proyek container mx-auto px-4  py-18 ">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Proyek
          </h1>
          <p
            className="text-base/loose text-center text-zinc-500 "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa proyek yang telah di kerjakan
          </p>

          <div className="proyek-box sm:mt10 mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
            {listProyek.map((proyek) => (
              <div
                data-slot="card"
                className=" bg-white flex flex-col rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
                key={proyek.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <div className="realtive overflow-hidden">
                  <img
                    src={proyek.gambar}
                    alt="Proyek Image"
                    className="w-full sm:h-46 md:h-40 xl:h-65 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium ">{proyek.nama}</h3>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="text-sm">{proyek.span}</span>
                    </div>
                  </div>
                  <p className="text-base/loose mb-4"> {proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {proyek.tools.map((tool, index) => (
                      <p key={index} className="py-1 px-2 border border-zinc-200 rounded-xl font-medium text-sm">
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    {proyek.githubUrl && (
                      <a
                        className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors]"
                        href={proyek.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github w-4 h-4"
                          aria-hidden="true"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {proyek.liveUrl && (
                      <a
                        className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors]"
                        href={proyek.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link w-4 h-4"
                          aria-hidden="true"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Proyek */}

      {/* Kontak */}
      <div
        className="kontak lg:py-20 py-20 sm:mt-15 mt-10 sm:p-0 p-5 "
        id="kontak"
        // data-aos="fade-up"
        // data-aos-duration="1000"
        // data-aos-delay="500"
        // data-aos-once="true"
      >
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50 text-zinc-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari Terhubung Dengan Saya
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div data-slot="card" className="bg-white flex flex-col gap-6 rounded-xl border border-zinc-300 p-8">
              <h3 className="text-xl font-medium mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-200 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail w-5 h-5 text-primary"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:nandasultan10@gmail.com"
                      className="text-zinc-500  hover:text-black  transition-colors"
                    >
                      nandasultan10@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-200 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone w-5 h-5 text-primary"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Telepon</p>
                    <a
                      href="https://wa.me/6285251728884"
                      className="text-zinc-500 hover:text-black transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +62 852-5172-8884
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-200 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-5 h-5 text-primary"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Lokasi</p>
                    <p className="text-zinc-500">Kalimantan Timur, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-slot="card" className="flex flex-col gap-6 rounded-xl border border-zinc-300 p-8">
              <h3 className="text-xl font-medium mb-1">Profil Online</h3>
              <div className="">
                <a
                  href="https://www.linkedin.com/in/nandasultan/"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin w-5 h-5 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-zinc-500">Profil profesional</p>
                  </div>
                </a>
                <a
                  href="https://github.com/nandasultan"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github w-5 h-5 text-gray-800 dark:text-gray-200"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-zinc-500">Repository proyek</p>
                  </div>
                </a>
                <a
                  href="/public/assets/CV-ATS-ANANDA.pdf"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={true}
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-file-text w-5 h-5 text-green-600 dark:text-green-400"
                      aria-hidden="true"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Download CV</p>
                    <p className="text-sm text-zinc-500">Curriculum Vitae</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border p-8 bg-zinc-200 border-zinc-300"
            >
              <h3 className="text-xl font-bold mb-4">Mari Berkolaborasi!</h3>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Saya selalu terbuka untuk kesempatan baru, proyek menarik, atau sekedar diskusi tentang teknologi dan
                pengembangan software. Mari kita ciptakan sesuatu yang luar biasa bersama!
              </p>

              <form
                action="https://formsubmit.co/nandasultan10@gmail.com"
                method="POST"
                className="bg-white border border-zinc-300 sm:p-10 p-4 mb-5 sm:w-fit w-full mx-auto rounded-lg"
                autoComplete="off"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Nama Lengkap</label>
                    <input
                      type="text"
                      name="Nama"
                      placeholder="Masukan Nama..."
                      className="bg-zinc-100/50 border border-zinc-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Masukan Email..."
                      className="bg-zinc-100/50 border border-zinc-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pesan" className="font-semibold">
                      Pesan
                    </label>
                    <textarea
                      name="Pesan"
                      id="pesan"
                      cols="45"
                      rows="7"
                      placeholder="Pesan..."
                      className="bg-zinc-100/50 border border-zinc-300 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="sumbit"
                      className="bg-zinc-900 text-white p-3 rounded-lg w-full cursor-pointer block border border-zinc-300 hover:bg-zinc-800/90 transition-colors"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
