import { ECommerceSinglePage, SpaceTourism } from '../assets';
import { IPortfolioData } from '../types/dataPortfolio.type';

export const dataPortfolio: IPortfolioData[] = [
  {
    id: 1,
    title: 'Space Tourism',
    image: SpaceTourism,
    site: 'https://space-tourim-asrulkadir.netlify.app',
    technologies: [
      {
        name: 'ReactJs',
        image: 'https://reactjs.org/logo-og.png',
        link: 'https://reactjs.org',
      },
      {
        name: 'Styled-Components',
        image: 'https://styled-components.com/atom.png',
        link: 'https://styled-components.com/',
      },
      {
        name: 'Netlify',
        image:
          'https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg',
        link: 'https://www.netlify.com/',
      },
    ],
  },
  {
    id: 2,
    title: 'Ecommerce Single Page',
    image: ECommerceSinglePage,
    site: 'https://challenge-frontend-mentor-two.vercel.app',
    technologies: [
      {
        name: 'ReactJs',
        image: 'https://reactjs.org/logo-og.png',
        link: 'https://reactjs.org',
      },
      {
        name: 'NextJs',
        image:
          'https://lampungkode.id/wp-content/uploads/2021/07/nextjs-logo.png',
        link: 'https://nextjs.org',
      },
      {
        name: 'Vercel',
        image:
          'https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg',
        link: 'https://vercel.com',
      },
    ],
  },
];
