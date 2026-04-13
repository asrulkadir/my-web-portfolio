import {
  CloneFacebook,
  ECommerceSinglePage,
  GolangLogo,
  SectionComment,
  SpaceTourism,
} from "../assets";
import { IPortfolioData } from "../types/dataPortfolio.type";

export const dataPortfolio: IPortfolioData[] = [
  {
    id: 1,
    title: "Space Tourism",
    image: SpaceTourism,
    site: "https://space-tourim-asrulkadir.netlify.app",
    technologies: [
      {
        name: "React.js",
        image: "https://reactjs.org/logo-og.png",
        link: "https://reactjs.org",
      },
      {
        name: "Styled-Components",
        image: "https://styled-components.com/atom.png",
        link: "https://styled-components.com/",
      },
      {
        name: "Netlify",
        image:
          "https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg",
        link: "https://www.netlify.com/",
      },
    ],
  },
  {
    id: 2,
    title: "Ecommerce Single Page",
    image: ECommerceSinglePage,
    site: "https://challenge-frontend-mentor-two.vercel.app",
    technologies: [
      {
        name: "React.js",
        image: "https://reactjs.org/logo-og.png",
        link: "https://reactjs.org",
      },
      {
        name: "Next.js",
        image:
          "https://lampungkode.id/wp-content/uploads/2021/07/nextjs-logo.png",
        link: "https://nextjs.org",
      },
      {
        name: "Vercel",
        image:
          "https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg",
        link: "https://vercel.com",
      },
    ],
  },
  {
    id: 3,
    title: "Interractive Section Comment",
    image: SectionComment,
    site: "https://section-comment.vercel.app",
    technologies: [
      {
        name: "React.js",
        image: "https://reactjs.org/logo-og.png",
        link: "https://reactjs.org",
      },
      {
        name: "Golang",
        image: GolangLogo,
        link: "https://go.dev",
      },
      {
        name: "PosgreSQL",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
        link: "https://www.postgresql.org",
      },
      {
        name: "Sass/Scss",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
        link: "https://sass-lang.com",
      },
    ],
  },
  {
    id: 4,
    title: "Clone Facebook",
    image: CloneFacebook,
    site: "https://clone-fb-asrulk.netlify.app",
    technologies: [
      {
        name: "React.js",
        image: "https://reactjs.org/logo-og.png",
        link: "https://reactjs.org",
      },
      {
        name: "Styled-Components",
        image: "https://styled-components.com/atom.png",
        link: "https://styled-components.com/",
      },
      {
        name: "Netlify",
        image:
          "https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg",
        link: "https://www.netlify.com/",
      },
    ],
  },
  {
    id: 5,
    title: "Example Portfolio",
    image: "https://res.cloudinary.com/dvqbaxtyr/image/upload/v1727097194/Asrul%27s%20Portfolio/yj8dmzoosvexjndv6uub.png",
    site: "https://portfolio-example-as.netlify.app",
    technologies: [
      {
        name: "React.js",
        image: "https://reactjs.org/logo-og.png",
        link: "https://reactjs.org",
      },
      {
        name: "Tailwind CSS",
        image: "https://styled-components.com/atom.png",
        link: "https://styled-components.com/",
      },
      {
        name: "Netlify",
        image:
          "https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg",
        link: "https://www.netlify.com/",
      },
    ],
  },
  {
    id: 6,
    title: "Expense Tracker",
    image: "https://res.cloudinary.com/dvqbaxtyr/image/upload/v1776071264/Screenshot_2026-04-13_at_18.06.02_befvqb.png",
    site: "https://expense-tracker.asrulkadir.com",
    technologies: [
      {
        name: "React.js",
        image: "https://reactjs.org/logo-og.png",
        link: "https://reactjs.org",
      },
      {
        name: "Tailwind CSS",
        image: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.6d5b1b6b.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "NestJS",
        image:
          "https://nestjs.com/img/logo-small.svg",
        link: "https://nestjs.com/",
      },
      {
        name: "MongoDB",
        image: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
        link: "https://www.mongodb.com/",
      },
      {
        name: "Docker",
        image: "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
        link: "https://www.docker.com/",
      }
    ],
  },
].reverse();
