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
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Stormshield",
    "Cisco",
    "Python",
    "SQL",
    "Linux",
    "Windows Server",
    "Openstack",
    "Proxmox",
    "Docker",
    "Kubernetes",
    "Ansible",
    "Terraform",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
        url: "",
        icon: Icons.x,

        navbar:  false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#matteo.meze@gmail.com",
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
      title: "Dyctalo-test",
      href: "https://github.com/Mtoulliou/JS-Dictalo",
      dates: "Feb 2025 - Feb 2025",
      active: true,
      description:
        "Make a little typing test for learn JavaScript.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mtoulliou/JS-Dictalo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Dictalo.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "https://toulliou-porfolio.vercel.app",
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
          href: "https://toulliou-porfolio.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mtoulliou/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
    {
      title: "ARProtect",
      href: "https://github.com/IUT-Beziers/sae501-502app-luu-toulliou",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Developed an application to monitor and detect ARP attacks in a network. This project was done with my classmate.",
      technologies: [
        "Python",
        "Docker",
        "Django",
        "API REST",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/IUT-Beziers/sae501-502app-luu-toulliou",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ARProtect.png",
      video: "",
    },
    {
      title: "Kubernetes Cluster",
      href: "https://github.com/Mtoulliou/SAE5D03-KUBERNETES",
      dates: "Feb 2025 - Feb 2025",
      active: true,
      description:
        "Deployed a Kubernetes cluster on a local network to discover Kubernetes and some technologie around like Rook-Ceph, Cilium. This project was done with my classmate.",
      technologies: [
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mtoulliou/SAE5D03-KUBERNETES",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Kubernetes.png",
      video: "",
    },
  ],
} as const;
