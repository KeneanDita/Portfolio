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
    link: "https://zobil.live",
    icon: "/github-mark.png",
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
    link: "https://madoads.com",
    icon: "/github-mark.png",
    tech: ["Python", "Rich", "Google-GenAI"],
    industry: ["AI", "Developer Tools"],
  },
  {
    title: "Vendly",
    description:
      "A comprehensive web platform built with Django and Tailwind CSS, this site offers a seamless, modern shopping experience across diverse categories. Vendly has clean, responsive design and optimized performance.",
    link: "https://github.com/nathnaeltk/ml-tech-usage-mental-health-risk-assessment",
    icon: "/github-mark.png",
    tech: ["Django", "Tailwind CSS", "SQLlite", "Docker"],
    industry: ["Ecommerce", "Retail"],
  },

  {
    title: "GradeCast",
    description:
      "A machine learning web application built with Flask that predicts student performance based on input data.This project showcases practical skills in data preprocessing, model training, evaluation, and deploying ML models using Flask for real-time predictions.",
    link: "https://github.com/nathnaeltk/ml-spam-email-detection",
    icon: "/github-mark.png",
    tech: ["Flask", "Scikit-learn", "Jupyter Notebook", "Docker"],
    industry: ["ML", "Education"],
  },
  {
    title: "Gitlog-CLI",
    description:
      "A lightweight command-line tool that connects to the GitHub API to retrieve and display a user’s most recent public activity. It shows actions such as commits, pull requests, issues, and repository events in a clean, readable format directly in the terminal.",
    link: "https://admasgames.com",
    icon: "/admas.png",
    tech: ["Urllib", "Json", "Rich"],
    industry: ["Developer Tools", "Terminal Utilities"],
  },
  {
    title: "Fidel-Vision",
    description:
      "A Deep Learning + Streamlit web app for recognizing handwritten Amharic fidel characters (34 root groups × 7 orders). It uses a CNN model built with TensorFlow/Keras, trained on a custom dataset of handwritten Amharic letters, and serves predictions through a Streamlit interface. ",
    link: "https://github.com/nathnaeltk/AirBnB_clone_v3",
    icon: "/airbnb.png",
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
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
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
            href="https://linkedin.com/in/keneandita/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <span>|</span>
          <span>+251-923759696</span>
        </div>
      </header>
      {/* Leadership Profile Section */}
      <section className="mb-10 rounded-xl border bg-background/70 p-6 flex flex-col gap-4 shadow-sm items-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-1 text-primary text-center">
          The World as a Puzzle
        </h2>
        <div className="text-sm text-muted-foreground leading-relaxed text-left space-y-3">
          <p>
            I've always seen the world as a collection of intricate puzzles
            waiting to be solved. Each line of code is a clue, every dataset an
            ancient map, and the final product that elegant solution is the
            treasure at the end.
          </p>
          <p>
            My journey through AI and machine learning has been about learning
            the language of these puzzles. I've come to understand that the most
            satisfying solutions aren't just technically brilliant they're
            human, connecting logic to need, and data to purpose.
          </p>
          <p>
            Now I stand with pieces in hand algorithms as my tools,
            collaboration as my method ready for the next great mystery. Some
            see problems; I see stories waiting to be solved.
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
                <a
                  href="/Resume/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          /* Social Links */
          <div className="flex-1 flex flex-col items-center sm:items-start gap-4 bg-transparent w-full">
            <h3 className="text-base font-semibold text-foreground">
              Social Links
            </h3>
            <div className="w-full flex flex-wrap justify-evenly gap-3">
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      }
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
                    href={project.link2}
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
