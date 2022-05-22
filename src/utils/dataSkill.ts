import {
  BootstrapLogo,
  CssLogo,
  GolangLogo,
  HtmlLogo,
  JavascriptLogo,
  NodeJsLogo,
  ReactLogo,
  TypescriptLogo,
} from "../assets";
import { ISkill } from "../types/dataSkill.type";

export const dataSkills: ISkill[] = [
  {
    name: "HTML",
    level: "Advanced",
    image: HtmlLogo,
  },
  {
    name: "CSS",
    level: "Advanced",
    image: CssLogo,
  },
  {
    name: "Javascript",
    level: "Intermediate",
    image: JavascriptLogo,
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    image: BootstrapLogo,
  },
  {
    name: "ReactJS",
    level: "Intermediate",
    image: ReactLogo,
  },
  {
    name: "Typescript",
    level: "Intermediate",
    image: TypescriptLogo,
  },
  {
    name: "NextJS",
    level: "Intermediate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
  },
  {
    name: "NodeJs",
    level: "Beginner",
    image: NodeJsLogo,
  },
  {
    name: "Golang",
    level: "Beginner",
    image: GolangLogo,
  },
  {
    name: "MySQL",
    level: "Beginner",
    image: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    name: "PostgreSQL",
    level: "Beginner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
  },
  {
    name: "MongoDB",
    level: "Beginner",
    image: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
  },
  {
    name: "Express",
    level: "Beginner",
    image:
      "https://assets.website-files.com/60b9fdcaf8c317a1cfdb2bd9/60d5df5a051d8765f7027878_expressjs.png",
  },
  {
    name: "TailwindCSS",
    level: "Intermediate",
    image: "https://miro.medium.com/max/450/1*9V4r2JpA02Jzu0Tro-i6hg.png",
  },
  {
    name: "Ant Design",
    level: "Intermediate",
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
  },
];
