interface IDescription {
  name: string;
  link: string;
  image: string;
}

export interface IPortfolioData {
  id: number;
  title: string;
  image: string;
  site: string;
  technologies: IDescription[];
}
