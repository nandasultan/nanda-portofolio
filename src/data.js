import HeroImage from "/assets/nanda2.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/blender.png";
import Tools10 from "/assets/tools/figma.png";
import Tools11 from "/assets/tools/photoshop.png";
import Tools12 from "/assets/tools/arduino.png";
import Tools13 from "/assets/tools/unity.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/cshrap.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools12,
    nama: "Arduino",
    ket: "",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools13,
    nama: "Unity",
    ket: "",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools2,
    nama: "Rect JS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    className: "",
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "900",
  },

  {
    id: 10,
    gambar: Tools16,
    nama: "C#",
    ket: "Langeguage",
    dad: "1000",
  },

  {
    id: 11,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools9,
    nama: "Blender",
    ket: "3D Design App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools10,
    nama: "Figma",
    ket: "Design App",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools11,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools12,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools13,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools5,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1700",
  },
];

import Proyek1 from "/assets/proyek/porto.webp";
import Proyek2 from "/assets/proyek/marketplace.webp";
import Proyek3 from "/assets/proyek/tebakkata.webp";
import Proyek4 from "/assets/proyek/Iot.webp";
import Proyek5 from "/assets/proyek/platformgame.webp";
//import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Portfolio Website",
    desk: "A personal website showcasing my profile, skills, and projects with a modern design built using ReactJS & TailwindCSS.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "200",
    span: "2025",
    liveUrl: null,
    githubUrl: "https://github.com/nandasultan/react-portofolio",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Marketplace Website",
    desk: "An online marketplace platform for buying and selling groceries (fish, chicken, meat), developed with PHP & MySQL.",
    tools: ["PHP", "XAMPP", "MySQL", "CSS", "Bootstrap"],
    dad: "300",
    span: "2024",
    liveUrl: "https://nandasultan.great-site.net/?i=1", // Sembunyikan tombol Live Demo
    githubUrl: "https://github.com/nandasultan/Masar.Yuk",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Elderly Word Guess Game",
    desk: "An educational game built with Unity, designed for the elderly to help train memory through simple word-guessing gameplay.",
    tools: ["UNITY", "C#", "Adobe Ps"],
    dad: "400",
    span: "2024",
    liveUrl: "https://github.com/nandasultan/gim-tebak-kata-lansia/releases/tag/v1.0.0",
    githubUrl: "https://github.com/nandasultan/gim-tebak-kata-lansia",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "IoT Automatic Fan and Misting System",
    desk: "An IoT project using NodeMCU ESP32 and DHT11 sensor to control a fan and misting system automatically based on temperature and humidity.",
    tools: ["Arduino", "C++", "ESP32", "DHT11"],
    dad: "500",
    span: "2023",
    liveUrl: "https://www.youtube.com/watch?v=CrBMEwiue_U",
    githubUrl: "https://github.com/nandasultan/nsp32-dht11",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Escape From The Forest Platform Game",
    desk: "A 2D platformer game built with Unity where players must survive and escape the forest by overcoming various obstacles.",
    tools: ["UNITY", "C#"],
    dad: "600",
    span: "2022",
    liveUrl: null,
    githubUrl: "https://github.com/nandasultan/gim-platform",
  },
];
