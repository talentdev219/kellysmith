import Image from "next/image";
import { SiExpress, SiSocketdotio, SiPrisma } from "react-icons/si";
import { GithubIcon } from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "Creativity",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="html logo" src="/icons/creativity.svg" fill />
      </span>
    ),
  },
  {
    name: "Risk-taking",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="css logo" src="/icons/risk-taking.svg" fill />
      </span>
    ),
  },
  {
    name: "Adaptability",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="sass logo" src="/icons/adaptability.svg" fill />
      </span>
    ),
  },
  {
    name: "Leadership",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="javascript logo" src="/icons/leadership.svg" fill />
      </span>
    ),
  },
  {
    name: "Strategic thinking",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="typescript logo" src="/icons/Strategic thinking.svg" fill />
      </span>
    ),
  },
  {
    name: "Financial management",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/Financial management.svg" fill />
      </span>
    ),
  },
  {
    name: "Sales and Marketing",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/sales and marketing.svg" fill />
      </span>
    ),
  },
  {
    name: "Networking",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/networking.svg" fill />
      </span>
    ),
  },
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "Analytical Skills",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/creativity.svg" fill />
      </span>
    ),
  },
  {
    name: "Risk management",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="vuejs logo" src="/icons/vue.svg" fill />
      </span>
    ),
  },
  // {
  //   name: "Nextjs",
  //   icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  // },
  // {
  //   name: "React-router-dom",
  //   icon: <ReactRouterDomIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  // },
  {
    name: "Due Dilligence",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="redux logo" src="/icons/redux.svg" fill />
      </span>
    ),
  },
  {
    name: "Negotiation Skills",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="tailwindcss logo" src="/icons/tailwindcss.svg" fill />
      </span>
    ),
  },
  {
    name: "Patience",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mui logo" src="/icons/mui.svg" fill />
      </span>
    ),
  },
  // {
  //   name: "Framer motion",
  //   icon: <FramerMotionIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  // },
  // {
  //   name: "Vite",
  //   icon: (
  //     <span className="relative h-5 w-5 sm:h-8 sm:w-8">
  //       <Image alt="vite logo" src="/icons/vite.svg" fill />
  //     </span>
  //   ),
  // },
  // {
  //   name: "Vite pwa",
  //   icon: <VitePwaIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  // },
];

export const BACKEND_PILL: SkillPillProps[] = [
  {
    name: "Nodejs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="nodejs logo" src="/icons/nodejs.svg" fill />
      </span>
    ),
  },
  {
    name: "Express",
    icon: <SiExpress className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "CodeIgniter",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="codeigniter logo" src="/icons/CI.svg" fill />
      </span>
    ),
  },
  {
    name: "Laravel",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="laravel logo" src="/icons/laravel.svg" fill />
      </span>
    ),
  },
  {
    name: "Django",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="django logo" src="/icons/django.svg" fill />
      </span>
    ),
  },
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "MongoDB",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mongodb logo" src="/icons/mongodb.svg" fill />
      </span>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mysql logo" src="/icons/mysql.svg" fill />
      </span>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postgresql logo" src="/icons/postgresql.svg" fill />
      </span>
    ),
  },
  {
    name: "GraphQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="graphql logo" src="/icons/graphql.svg" fill />
      </span>
    ),
  },
  {
    name: "Prisma",
    icon: (
      <SiPrisma className="h-5 w-5 fill-[#2d3748] dark:fill-zinc-100 sm:h-8 sm:w-8" />
    ),
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Git",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="git logo" src="/icons/git.svg" fill />
      </span>
    ),
  },
  {
    name: "Github",
    icon: <GithubIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Docker",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="docker logo" src="/icons/docker.svg" fill />
      </span>
    ),
  },
  {
    name: "Postman",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/postman.svg" fill />
      </span>
    ),
  },
  {
    name: "Vscode",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="vscode logo" src="/icons/vscode.svg" fill />
      </span>
    ),
  },
];
