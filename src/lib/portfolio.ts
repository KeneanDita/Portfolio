import {
  Brain,
  ChartSpline,
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Terminal,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const siteConfig = {
  name: "Kenean Dita Meleta",
  title: "Machine Learning & Backend Engineer",
  location: "Remote · Open to work",
  email: "KeneanSufa@gmail.com",
  headline:
    "I build ML-driven systems and reliable backend APIs turning messy data and ambiguous requirements into production-ready solutions.",
  resumeHref: "/Resume.pdf",
  social: {
    github: "https://github.com/keneandita",
    linkedin: "https://www.linkedin.com/in/keneandita",
    telegram: "https://t.me/keneandita",
  },
} as const;

export const about = {
  summary: [
    "I’m a Machine Learning & Backend Engineer focused on building end-to-end products: from data pipelines and model training to scalable APIs and deployment.",
    "I like solving problems where accuracy, latency, and maintainability all matter especially when systems need to work reliably under real-world constraints.",
  ],
  focusAreas: ["Machine Learning", "Backend Development", "Data Analysis"],
  learningNow: ["MLOps best practices", "Vector search + RAG patterns", "Distributed training"],
  targeting: ["Machine Learning Engineer", "Backend Engineer", "Data Analyst"],
} as const;

export type SkillItem = {
  label: string;
  iconSrc?: string;
  icon?: LucideIcon;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      {
        label: "Python",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        label: "NumPy",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        label: "Pandas",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        label: "Scikit-learn",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        label: "TensorFlow",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        label: "PyTorch",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        label: "Jupyter",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        label: "Keras",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      {
        label: "Flask",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        label: "Django",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        label: "REST APIs",
        icon: Code,
      },
      {
        label: "PostgreSQL",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        label: "MySQL",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        label: "SQLAlchemy",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Layers,
    skills: [
      {
        label: "Git & GitHub",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        label: "Docker",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        label: "Kubernetes",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        label: "Postman",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
] ;

export type ProjectLink = {
  label: "GitHub" | "Docker" | "Live";
  href: string;
};

export type Project = {
  title: string;
  category: "Machine Learning" | "Backend" | "CLI";
  icon: LucideIcon;
  problem: string;
  stack: string[];
  bullets: string[];
  outcome: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Cryptocurrency Price Prediction",
    category: "Machine Learning",
    icon: ChartSpline,
    problem: "Predict next-day crypto closing prices from today's market + technical indicators.",
    stack: ["Flask", "XGBoost", "Pandas", "Technical Indicators"],
    bullets: [
      "Next-day price prediction for BTC, ETH, LTC, and XPR",
      "Uses 14 engineered features (RSI, MACD, MAs, volatility, returns)",
      "Auto-calculates missing indicators and supports sample input data",
    ],
    outcome: "A practical forecasting demo that turns raw OHLC into actionable next-day estimates.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/KeneanDita/Cryptocurrency-Price-Predictor-using-Time-Series-data",
      },
      {
        label: "Docker",
        href: "https://hub.docker.com/r/keneandita/cryptocurrency-price-predictor-using-time-series-data",
      },
    ],
  },
  {
    title: "Memory Vault",
    category: "Backend",
    icon: Database,
    problem: "Securely capture, organize, and retrieve personal memories (text, images, audio, video).",
    stack: ["Flask", "Docker", "LocalStack", "S3", "DynamoDB"],
    bullets: [
      "Privacy-first storage with tagging, search, and timeline organization",
      "Media-friendly architecture using S3-style object storage and DynamoDB-style metadata",
      "Local dev environment via Docker + LocalStack",
    ],
    outcome: "A foundation for a personal knowledge/memory system with secure storage patterns.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/Memory-Vault" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/cloudclass" },
    ],
  },
  {
    title: "SentriX",
    category: "Machine Learning",
    icon: Brain,
    problem: "Analyze and predict cryptocurrency market movements with a minimal ML stack.",
    stack: ["TensorFlow", "PyTorch", "Streamlit", "Scikit-learn", "Matplotlib", "Docker"],
    bullets: [
      "Interactive Streamlit app for exploration + prediction workflows",
      "Clear, minimal project structure focused on crypto signal iteration",
    ],
    outcome: "A lightweight crypto ML sandbox that ships reproducibly with Docker.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/SentriX" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/sentrix" },
    ],
  },
  {
    title: "Fancy-Agent",
    category: "CLI",
    icon: Terminal,
    problem: "Boost terminal productivity with code generation, syntax highlighting, and interactive command prompts.",
    stack: ["Python", "Rich", "Google-GenAI"],
    bullets: [
      "CLI UX with rich formatting and interactive flows",
      "Designed to guide users from suggestion → execution safely",
    ],
    outcome: "A developer-tooling CLI that makes automation and iteration faster.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/Fancy-Agent" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/fancyagent" },
    ],
  },
  {
    title: "Vendly",
    category: "Backend",
    icon: Globe,
    problem: "Deliver a modern, responsive e-commerce experience with clean UI and solid backend structure.",
    stack: ["Django", "Tailwind CSS", "SQLite", "Docker"],
    bullets: [
      "Django-powered web platform with clean, responsive Tailwind UI",
      "Optimized for a smooth browsing and shopping flow across categories",
    ],
    outcome: "A production-style full-stack web app showcasing UX + backend fundamentals.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/Vendly" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/vendly" },
    ],
  },
  {
    title: "GradeCast",
    category: "Machine Learning",
    icon: ChartSpline,
    problem: "Predict student performance from input features with an end-to-end ML + web deployment workflow.",
    stack: ["Flask", "Scikit-learn", "Jupyter Notebook", "Docker"],
    bullets: [
      "Covers preprocessing, training, evaluation, and serving predictions",
      "Flask app provides real-time inference from user inputs",
    ],
    outcome: "A complete ML demo that connects model building to a usable web interface.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/GradeCast" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/gradecast" },
    ],
  },
  {
    title: "Gitlog-CLI",
    category: "CLI",
    icon: Terminal,
    problem: "View your latest GitHub public activity directly in the terminal (commits, PRs, issues, events).",
    stack: ["Urllib", "JSON", "Rich"],
    bullets: [
      "Connects to the GitHub API and formats output for fast scanning",
      "Clean, readable terminal UX for recent activity summaries",
    ],
    outcome: "A small but useful CLI that turns noisy activity feeds into clarity.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/Gitlog-CLI" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/gitlogcli" },
    ],
  },
  {
    title: "Fidel-Vision",
    category: "Machine Learning",
    icon: Code,
    problem: "Recognize handwritten Amharic fidel characters via a CNN model served through a Streamlit app.",
    stack: ["Streamlit", "Keras", "TensorFlow", "Pandas", "Docker"],
    bullets: [
      "CNN model trained on a custom handwritten Amharic dataset",
      "Streamlit UI serves predictions for 34 root groups × 7 orders",
    ],
    outcome: "A complete deep learning demo combining training, inference, and a usable UI.",
    links: [
      { label: "GitHub", href: "https://github.com/KeneanDita/Fidel-Vision" },
      { label: "Docker", href: "https://hub.docker.com/r/keneandita/fidelvision" },
    ],
  },
];
