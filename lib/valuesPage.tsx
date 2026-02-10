// src/lib/valuesPage.ts
import { Github, FileText, Mail, Phone } from "lucide-react";

export const languages = [
  { name: "JavaScript", level: "Básico" },
  { name: "TypeScript", level: "Básico" },
  { name: "React / Next.js", level: "Básico" },
  { name: "Node.js", level: "Básico" },
  { name: "Python", level: "Básico" },
  { name: "Tailwind CSS", level: "Básico" },
  { name: "MySql", level: "Básico" },
  { name: "C", level: "Básico" },
  { name: "C#", level: "Básico" },
  { name: "Java", level: "Básico" },
];

export const projects = [
  {
    title: "LandPage Psicologia",
    tag: "Full Stack",
    img: "/projeto1.png",
    tech: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Horta Vertical",
    tag: "Automação",
    img: "/projects.jpg",
    tech: ["C++", "Arduino", "Flutters"],
  },
  {
    title: "Gerenciamento Encomenda",
    tag: "Full Stack",
    img: "/projects.jpg",
    tech: ["Java", "Java Swing", "MySQL"],
  },
];

export const contactInfo = {
  email: "matheusduartemartins2@gmail.com",
  phone: "+55 27 99281-2662",
  phoneRaw: "+5527992812662",
};
