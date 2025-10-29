import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const projects = [
  {
    title: "SentriX",
    description:
      "A minimal machine learning project that analyzes and predicts cryptocurrency market movements.",
    link: "https://github.com/KeneanDita/SentriX",
    dockerlink:
      "https://hub.docker.com/repository/docker/keneandita/sentrix/general",
    icon: "/crypto.png",
    tech: [
      "Tensorflow",
      "Torch",
      "Streamlit",
      "Scikit-learn",
      "Matplotlib",
      "Docker",
    ],
    industry: ["ML", "Crypto"],
  },
  {
    title: "Fancy-Agent",
    description:
      "A command-line interface (CLI) tool designed to assist with code generation, syntax highlighting, and interactively prompting users to execute commands. ",
    link: "https://github.com/KeneanDita/Fancy-Agent",
    dockerlink:
      "https://hub.docker.com/repository/docker/keneandita/fancy-agent/general",
    icon: "/terminal2.png",
    tech: ["Python", "Rich", "Google-GenAI"],
    industry: ["AI", "Developer Tools"],
  },
  {
    title: "Vendly",
    description:
      "A comprehensive web platform built with Django and Tailwind CSS, this site offers a seamless, modern shopping experience across diverse categories. Vendly has clean, responsive design and optimized performance.",
    link: "https://github.com/KeneanDita/Vendly",
    dockerlink:
      "https://hub.docker.com/repository/docker/keneandita/vendly/general",
    icon: "/global.png",
    tech: ["Django", "Tailwind CSS", "SQLlite", "Docker"],
    industry: ["Ecommerce", "Retail"],
  },

  {
    title: "GradeCast",
    description:
      "A machine learning web application built with Flask that predicts student performance based on input data.This project showcases practical skills in data preprocessing, model training, evaluation, and deploying ML models using Flask for real-time predictions.",
    link: "https://github.com/KeneanDita/GradeCast",
    dockerlink:
      "https://hub.docker.com/repository/docker/keneandita/gradecast/general",
    icon: "/grade.png",
    tech: ["Flask", "Scikit-learn", "Jupyter Notebook", "Docker"],
    industry: ["ML", "Education"],
  },
  {
    title: "Gitlog-CLI",
    description:
      "A lightweight command-line tool that connects to the GitHub API to retrieve and display a user’s most recent public activity. It shows actions such as commits, pull requests, issues, and repository events in a clean, readable format directly in the terminal.",
    link: "https://github.com/KeneanDita/Gitlog-CLI",
    dockerlink:
      "https://hub.docker.com/repository/docker/keneandita/gitlog-cli/general",
    icon: "/terminal.png",
    tech: ["Urllib", "Json", "Rich"],
    industry: ["Developer Tools", "Terminal Utilities"],
  },
  {
    title: "Fidel-Vision",
    description:
      "A Deep Learning + Streamlit web app for recognizing handwritten Amharic fidel characters (34 root groups × 7 orders). It uses a CNN model built with TensorFlow/Keras, trained on a custom dataset of handwritten Amharic letters, and serves predictions through a Streamlit interface. ",
    link: "https://github.com/KeneanDita/Fidel-Vision",
    dockerlink:
      "https://hub.docker.com/repository/docker/keneandita/fidelvision/general",
    icon: "/fv.png",
    tech: ["Streamlit", "Keras", "TensorFlow", "Pandas", "Docker"],
    industry: ["Deep Learning", "Amharic Language"],
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-4 flex flex-col items-center">
      <header
        className={`mb-12 flex flex-col items-center text-center gap-2 ${geistMono.variable} font-mono`}
      >
        {/* <div className="rounded-full border border-muted bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 w-20 h-20 flex items-center justify-center mb-2 overflow-hidden">
          <Image src="/headshot.png" alt="Kenean Dita Meleta" width={80} height={80} className="object-cover w-full h-full" />
        </div> */}
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-sky-300 bg-clip-text text-transparent">
          Kenean Dita Meleta
        </h1>
        <p className="text-muted-foreground text-base">
          Software Engineer | Container Guru | ML Enthusiast
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground justify-center">
          <a href="mailto:keneansufa@gmail.com" className="hover:underline">
            keneansufa@gmail.com
          </a>
          <span>|</span>
          <a
            href="https://linktr.ee/KeneanDita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Linktree
          </a>
          <span>|</span>
          <span>+251-923759696</span>
        </div>
      </header>

      {/* Leadership Profile Section */}
      <section className="mb-10 rounded-xl border bg-background/70 p-6 flex flex-col gap-4 shadow-sm items-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-1 text-primary text-center">
          A Simple Quote
        </h2>
        <div className="text-sm text-muted-foreground leading-relaxed text-left space-y-3">
          <p className="text-base font-semibold text-foreground">
            "Simplicity is the ultimate sophistication."
          </p>
          <p>Leonardo da Vinci</p>
          <p>
            The most elegant solution, like the most refined dish, often appears
            simple and intuitive. But behind that simplicity lies a deep
            understanding of complex ingredients and techniques, all working in
            harmony to create something both powerful and beautiful.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-10 rounded-xl border bg-background/70 p-6 flex flex-col gap-4 shadow-sm items-center w-full max-w-5xl">
        <h2 className="text-lg font-semibold mb-1 text-primary text-center">
          About Me
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 bg-transparent">
            <div className="w-full sm:w-1/3 flex justify-center">
              <Image
                src="/cover.png"
                alt="Resume"
                width={595}
                height={842}
                className="object-cover rounded shadow-md border w-[150px] sm:w-[120px] md:w-[180px] lg:w-[210px] xl:w-[250px] h-auto"
                style={{ aspectRatio: "595/842" }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 items-start w-full">
              <h3 className="text-base font-semibold text-foreground">
                Resume
              </h3>
              <p className="text-sm text-muted-foreground">
                Focused on achieving project goals through clear planning,
                effective teamwork, and attention to detail. Skilled in managing
                tasks, solving problems, and adapting to changing needs to
                deliver quality results on time.
              </p>
              <Button asChild size="sm" variant="outline">
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 bg-transparent">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 bg-transparent">
              <div className="flex-1 flex flex-col gap-4 items-start w-full">
                <h3 className="text-base font-semibold text-foreground">
                  My Socials
                </h3>
                <p className="text-sm text-muted-foreground">
                  Have questions about my projects or interested in
                  collaborating? Feel free to reach out!
                </p>

                {/* Social Links Container */}
                <div className="flex flex-wrap gap-3">
                  {/* LinkedIn */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2"
                  >
                    <a
                      href="https://linkedin.com/in/keneandita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </Button>
                  {/* GitHub */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2"
                  >
                    <a
                      href="https://github.com/keneandita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </Button>

                  {/* Telegram */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2"
                  >
                    <a
                      href="https://t.me/keneandita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.191l-1.83 8.725c-.129.585-.479.73-.975.455l-2.714-2.015-1.32 1.277c-.146.146-.269.269-.552.269l.198-2.835 5.061-4.626c.216-.194-.047-.301-.335-.107l-6.249 3.989-2.693-.843c-.586-.183-.597-.586.122-.888l10.5-4.044c.488-.183.914.107.755.888z" />
                      </svg>
                    </a>
                  </Button>

                  {/* Instagram */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2"
                  >
                    <a
                      href="https://instagram.com/kenean.dita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </Button>

                  {/* Twitter */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2"
                  >
                    <a
                      href="https://twitter.com/keneandita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-12 w-full flex flex-col items-center max-w-2xl">
        <h2 className="text-lg font-semibold mb-4 text-center">
          My Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4 text-sm justify-center">
          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="w-5 h-5"
            />{" "}
            Python
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
              alt="Django"
              className="w-5 h-5"
            />{" "}
            Django
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
              alt="Flask"
              className="w-5 h-5"
            />{" "}
            Flask
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
              alt="FastAPI"
              className="w-5 h-5"
            />{" "}
            FastAPI
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
              alt="TensorFlow"
              className="w-5 h-5"
            />{" "}
            TensorFlow
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
              alt="PyTorch"
              className="w-5 h-5"
            />{" "}
            PyTorch
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
              alt="Keras"
              className="w-5 h-5"
            />{" "}
            Keras
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
              alt="Scikit-learn"
              className="w-5 h-5"
            />{" "}
            Scikit-learn
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"
              alt="Streamlit"
              className="w-5 h-5"
            />{" "}
            Streamlit
          </span>
          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
              alt="Jupyter"
              className="w-5 h-5"
            />{" "}
            Jupyter
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              className="w-5 h-5"
            />{" "}
            MySQL
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              className="w-5 h-5"
            />{" "}
            Git
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-5 h-5"
            />{" "}
            GitHub
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              className="w-5 h-5"
            />{" "}
            Docker
          </span>

          <span className="flex items-center gap-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded px-3 py-1 font-mono">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
              alt="Kubernetes"
              className="w-5 h-5"
            />{" "}
            Kubernetes
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12 w-full flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center w-full">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border bg-background hover:shadow-lg transition-shadow group flex flex-col items-center w-full max-w-xs"
            >
              <CardHeader className="flex flex-row items-center gap-2 pb-1 justify-center w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[340px]">
                <div className="w-12 h-12 aspect-square flex items-center justify-center bg-white rounded shadow-sm">
                  <Image
                    src={project.icon}
                    alt="icon"
                    width={32}
                    height={32}
                    className="object-contain drop-shadow-md shadow-md"
                  />
                </div>
                <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors text-center truncate whitespace-normal leading-snug w-full">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-2 text-xs text-muted-foreground text-left w-full">
                {project.description}
              </CardDescription>
              <div className="px-6 pb-2 flex flex-wrap gap-1 justify-center w-full">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded px-2 py-0.5 text-[10px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
                {project.industry.map((tag) => (
                  <span
                    key={tag}
                    className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 rounded px-2 py-0.5 text-[10px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="px-6 pb-3 pt-1 w-full flex  gap-5">
                <Button asChild size="sm" variant="outline" className="w-2/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="w-2/5">
                  <a
                    href={project.dockerlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docker
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
