import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "TOULLIOU Mattéo",
  initials: "MT",
  url: "https://dillion.io",
  location: "Montpellier, France",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring Cloud Engineer | Tech Explorer",
  summary:
    "Currently working at Bouygues Energies & Services (Equans Digital) as a Network Technician, while studying Networks, Development, and Cloud Computing at IUT Béziers.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Stormshield",
    "Cisco",
    "Python",
    "SQL",
    "Docker",
    "Kubernetes",
    "Ansible",
    "Terraform",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "matteo.meze@gmail.com",
    tel: "+33 6 52 91 32 51",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mtoulliou",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matteo-toulliou/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar:  false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Bouygues Energies & Services",
      href: "https://www.bouygues-es.fr/",
      badges: [],
      location: "Montpellier, France",
      title: "Network Technician in Apprenticeship",
      logoUrl: "/byes.png",
      start: "Sept 2024",
      end: "August 2025",
      description:
        "Exploration of network security, large-scale infrastructures, and industry expertise.",
    },
    {
      company: "Communauté d'Agglomération Béziers Méditerranée",
      badges: [],
      href: "https://www.agglobeziers.fr/",
      location: "Béziers, France",
      title: "Network Technician and System in Apprenticeship",
      logoUrl: "/cabm.png",
      start: "Oct 2023",
      end: "August 2024",
      description:
        "Professional immersion in the networking field, applying theoretical knowledge to real-world scenarios. Introduction to enterprise virtualization (Windows) and firewall technologies (Stormshield).",
    },
  ],
  education: [
    {
      school: "IUT de Béziers",
      href: "https://www.iutbeziers.fr/rt-beziers.html",
      degree: "BUT Network and telecommunication in Apprenticeship (Cloud specialization)",
      logoUrl: "/iutbeziers.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Portfolio",
      href: "https://toulliou.org",
      dates: "Feb 2025 - Feb 2025",
      active: true,
      description:
        "For candidate at engeneering school, I created a portfolio to present my skills and my projects. At the same time I learned how to use Next.js and TailwindCSS.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://toulliou.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mtoulliou/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
