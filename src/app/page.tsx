"use client";

import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SkillChart } from "@/components/skill-chart";
import { VisitorCounter } from "@/components/visitor-counter";
import { CalModalButton } from "@/components/cal-modal-button";

const experiences = [
  {
    company: "KalkiNi",
    role: "Backend Developer Intern",
    period: "Present",
    description: [
      "Designing scalable microservices architecture using Node.js.",
      "Optimizing database queries for high-volume data ingestion.",
      "Implementing secure authentication flows."
    ]
  },
  {
    company: "KeyNCoder",
    role: "Full Stack Developer",
    period: "2023 - 2024",
    description: [
      "Contributed to frontend architecture using React and Express.",
      "Optimized CI/CD pipelines reducing deployment time by 20%.",
      "Built RESTful APIs consumed by mobile and web clients."
    ]
  }
];

const projects = [
  {
    title: "HireNeoAI",
    description: "AI-powered recruitment platform streamlining candidate screening. Leverages Google Cloud for scalability and Docker for containerization.",
    tags: ["Next.js", "TS", "Node.js", "GCP", "Docker"],
    links: { demo: "#", repo: "#" }
  },
  {
    title: "About-me-API",
    description: "Developer-centric portfolio generator exposing personal data via JSON APIs. Built with clean architecture and type safety.",
    tags: ["Next.js", "ShadCN", "Tailwind", "REST"],
    links: { demo: "#", repo: "#" }
  },
  {
    title: "Autonomous Trading Agents",
    description: "Financial trading bot using vector embeddings for market sentiment analysis with advanced retrieval mechanisms.",
    tags: ["Python", "Faiss", "Vector DB", "LLMs"],
    links: { repo: "#" }
  }
];

export default function Home() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hey@knileshh.com");
    alert("Email copied to clipboard");
  };

  return (
    <div className="min-h-screen flex justify-center bg-technical-50 font-sans text-technical-900 p-4 md:p-8 transition-colors duration-300">

      {/* Main Container - Flex row to allow sidebars to stretch */}
      <div className="w-full max-w-[900px] bg-card shadow-sm flex relative z-10 border border-technical-300 transition-colors duration-300">

        {/* Left Hatched Frame - Full Height */}
        <div className="w-4 md:w-6 bg-hatch-pattern border-r border-technical-300 shrink-0 hidden sm:block"></div>

        {/* Content Area */}
        <div className="flex-1 bg-card min-w-0 flex flex-col transition-colors duration-300">

          {/* Navigation Bar */}
          <Navbar />

          {/* Header */}
          <header className="px-6 py-6 md:px-12 md:py-10 border-b border-technical-200">
            <div className="flex justify-between items-start gap-6">
              {/* Left: Name, Role, Status, Links */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-technical-900">
                    Nilesh Kumar
                  </h1>
                  {/* Open to Work Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    Open to Work
                  </div>
                </div>

                <p className="font-mono text-xs text-technical-500 mb-4">
                  Backend Engineer
                </p>

                <p className="text-technical-600 leading-relaxed max-w-md text-xs md:text-sm mb-4">
                  Final year MCA student at VIT Vellore. Building scalable systems with Node.js and TypeScript.
                </p>

                {/* Links Row - Icons only with tooltips on larger screens */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={copyEmail}
                    className="p-2 text-technical-600 hover:text-technical-900 hover:bg-technical-100 rounded-md transition-colors"
                    title="hey@knileshh.com"
                  >
                    <Mail size={16} />
                  </button>
                  <a
                    href="https://github.com/knileshh"
                    target="_blank"
                    className="p-2 text-technical-600 hover:text-technical-900 hover:bg-technical-100 rounded-md transition-colors"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/knileshh"
                    target="_blank"
                    className="p-2 text-technical-600 hover:text-technical-900 hover:bg-technical-100 rounded-md transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-technical-900 bg-technical-100 hover:bg-technical-200 rounded-md transition-colors"
                  >
                    <FileText size={14} />
                    Resume
                  </a>
                </div>
              </div>

              {/* Right: Profile Picture */}
              <div className="hidden md:block shrink-0">
                <div className="w-28 h-28 rounded-sm border-2 border-technical-200 bg-technical-100 overflow-hidden relative group">
                  <img
                    src="/avatar.png"
                    alt="Nilesh Kumar"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </header>

          <main className="px-6 py-8 md:px-12 md:py-12">

            {/* 01 - Experience */}
            <section id="experience" className="mb-16 scroll-mt-24">
              <SectionHeading number="01" title="Experience" />
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} data={exp} />
                ))}
              </div>
            </section>

            {/* 02 - Projects */}
            <section id="projects" className="mb-16 scroll-mt-24">
              <SectionHeading number="02" title="Projects" />
              <div className="grid grid-cols-1 gap-4">
                {projects.map((proj, index) => (
                  <ProjectCard key={index} data={proj} />
                ))}
              </div>
            </section>

            {/* 03 - Skills */}
            <section id="skills" className="mb-16 scroll-mt-24">
              <SectionHeading number="03" title="Skill" />
              <SkillChart />
            </section>

            {/* 04 - Contact */}
            <section id="contact" className="mb-8 scroll-mt-24">
              <SectionHeading number="04" title="Contact" />

              <div className="grid md:grid-cols-2 gap-4">
                <CalModalButton calLink="knileshh" />

                <a href="mailto:hey@knileshh.com" className="block group">
                  <div className="h-full border border-technical-200 bg-card p-6 transition-all hover:border-technical-900 hover:shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-technical-100 rounded-sm text-technical-800">
                        <Mail size={20} />
                      </div>
                      <ArrowUpRight size={16} className="text-technical-400 group-hover:text-technical-900" />
                    </div>
                    <h4 className="font-bold text-technical-900">Send Email</h4>
                    <p className="text-sm text-technical-500 mt-1">hey@knileshh.com</p>
                  </div>
                </a>
              </div>
            </section>

            <footer className="pt-12 mt-12 border-t border-technical-200 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
              <div>
                <p className="font-mono text-xs text-technical-400">
                  © 2026 Nilesh Kumar.
                </p>
                <p className="font-mono text-[10px] text-technical-300 mt-1">
                  Built with Next.js &amp; Tailwind.
                </p>
              </div>
              <VisitorCounter />
            </footer>

          </main>
        </div>

        {/* Right Hatched Frame - Full Height */}
        <div className="w-4 md:w-6 bg-hatch-pattern border-l border-technical-300 shrink-0 hidden sm:block"></div>
      </div>

    </div>
  );
}
