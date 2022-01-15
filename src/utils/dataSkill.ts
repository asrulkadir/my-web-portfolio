import {
  BootstrapLogo,
  CssLogo,
  GolangLogo,
  HtmlLogo,
  JavascriptLogo,
  NodeJsLogo,
  ReactLogo,
  TypescriptLogo,
} from '../assets';
import { ISkill } from '../types/dataSkill.type';

export const dataSkills: ISkill[] = [
  {
    name: 'HTML',
    level: 'Advanced',
    image: HtmlLogo,
  },
  {
    name: 'CSS',
    level: 'Advanced',
    image: CssLogo,
  },
  {
    name: 'Javascript',
    level: 'Intermediate',
    image: JavascriptLogo,
  },
  {
    name: 'Bootstrap',
    level: 'Intermediate',
    image: BootstrapLogo,
  },
  {
    name: 'ReactJS',
    level: 'Intermediate',
    image: ReactLogo,
  },
  {
    name: 'Typescript',
    level: 'Intermediate',
    image: TypescriptLogo,
  },
  {
    name: 'NodeJs',
    level: 'Beginner',
    image: NodeJsLogo,
  },
  {
    name: 'Golang',
    level: 'Beginner',
    image: GolangLogo,
  },
  {
    name: 'MySQL',
    level: 'Beginner',
    image: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
  },
  {
    name: 'PostgreSQL',
    level: 'Beginner',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
  },
];
