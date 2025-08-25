import HeroImage from "/assets/nanda2.png";

import vscode from "/assets/tools/vscode.png";
import html from "/assets/tools/html.png";
import css from "/assets/tools/css.png";
import javascript from "/assets/tools/js.png";
import markdown from "/assets/tools/markdown.png";
import cplus from "/assets/tools/cplus.svg";
import cshrap from "/assets/tools/cshrap.png";
import php from "/assets/tools/php.png";
import python from "/assets/tools/python.svg";
import r from "/assets/tools/R.png";
import kotlin from "/assets/tools/kotlin.png";
import react from "/assets/tools/reactjs.png";
import nextjs from "/assets/tools/nextjs.png";
import laravel from "/assets/tools/laravel.png";
import bootstrap from "/assets/tools/bootstrap.png";
import tailwind from "/assets/tools/tailwind.png";
import vite from "/assets/tools/vite.png";
import nodejs from "/assets/tools/nodejs.png";
import xampp from "/assets/tools/xampp.png";
import mysql from "/assets/tools/mysql.png";
import arduino from "/assets/tools/arduino.png";
import unity from "/assets/tools/unity.png";
import github from "/assets/tools/github.png";
import figma from "/assets/tools/figma.png";
import ps from "/assets/tools/photoshop.png";
import ai from "/assets/tools/ai.png";
import ae from "/assets/tools/ae.png";
import pr from "/assets/tools/pr.png";
import canva from "/assets/tools/canva.png";
import blender from "/assets/tools/blender.png";
import sketchup from "/assets/tools/sketchup.png";

const Image = {
  HeroImage,
};

export default Image;

export const listTools = [
  {
    id: 1,
    gambar: vscode,
    nama: "Visual Studio Code",
    ket: "Code Editor",
  },
  {
    id: 2,
    gambar: html,
    nama: "HTML",
    ket: "Markup Language",
  },
  {
    id: 3,
    gambar: css,
    nama: "CSS",
    ket: "Style Language",
  },
  {
    id: 4,
    gambar: javascript,
    nama: "JavaScript",
    ket: "Programming Language",
  },
  {
    id: 5,
    gambar: markdown,
    nama: "Markdown",
    ket: "Markup Language",
  },
  {
    id: 6,
    gambar: cplus,
    nama: "C++",
    ket: "Programming Language",
  },
  {
    id: 7,
    gambar: cshrap,
    nama: "C#",
    ket: "Programming Language",
  },
  {
    id: 8,
    gambar: php,
    nama: "PHP",
    ket: "Programming Language",
  },
  {
    id: 9,
    gambar: python,
    nama: "Python",
    ket: "Programming Language",
  },
  {
    id: 10,
    gambar: r,
    nama: "R",
    ket: "Programming Language",
  },
  {
    id: 11,
    gambar: kotlin,
    nama: "Kotlin",
    ket: "Programming Language",
  },
  {
    id: 12,
    gambar: react,
    nama: "React",
    ket: "Javascript Library",
  },
  {
    id: 13,
    gambar: nextjs,
    nama: "Next.js",
    ket: "React Framework",
  },
  {
    id: 14,
    gambar: laravel,
    nama: "Laravel",
    ket: "PHP Framework",
  },
  {
    id: 15,
    gambar: bootstrap,
    nama: "Bootstrap",
    ket: "CSS Framework",
  },
  {
    id: 16,
    gambar: tailwind,
    nama: "TailwindCSS",
    ket: "CSS Framework",
  },
  {
    id: 17,
    gambar: vite,
    nama: "Vite",
    ket: "Frontend Build Tool",
  },
  {
    id: 18,
    gambar: nodejs,
    nama: "Node.js",
    ket: "JavaScript Runtime",
  },
  {
    id: 19,
    gambar: xampp,
    nama: "XAMPP",
    ket: "Web Server / Dev Environment",
  },
  {
    id: 20,
    gambar: mysql,
    nama: "MySQL",
    ket: "Database",
  },
  {
    id: 21,
    gambar: arduino,
    nama: "Arduino",
    ket: "IoT Platform",
  },
  {
    id: 22,
    gambar: unity,
    nama: "Unity",
    ket: "Game Engine",
  },
  {
    id: 23,
    gambar: github,
    nama: "GitHub",
    ket: "Repository / Version Control",
  },
  {
    id: 24,
    gambar: figma,
    nama: "Figma",
    ket: "UI/UX Design App",
  },
  {
    id: 25,
    gambar: ps,
    nama: "Adobe Photoshop",
    ket: "Design App",
  },
  {
    id: 26,
    gambar: ai,
    nama: "Adobe Illustrator",
    ket: "Design App",
  },
  {
    id: 27,
    gambar: ae,
    nama: "Adobe After Effects",
    ket: "Motion Graphics",
  },
  {
    id: 28,
    gambar: pr,
    nama: "Adobe Premiere Pro",
    ket: "Video Editing",
  },
  {
    id: 29,
    gambar: canva,
    nama: "Canva",
    ket: "Design App",
  },
  {
    id: 30,
    gambar: blender,
    nama: "Blender",
    ket: "3D Design App",
  },
  {
    id: 31,
    gambar: sketchup,
    nama: "SketchUp",
    ket: "3D Design App",
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
