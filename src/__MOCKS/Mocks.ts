import { FULL_BAR, LARGER_BAR, MEDIUM_BAR, SMALL_BAR } from '../constants/home';

export const arrProjects = [
  {
    name: 'Churrascometro',
    description:
      'Cansado de fazer churrasco e não saber quanta carne / refrigerante comprar, criei um sistema para calcular quanto comprar por quantidade de pessoas e tempo de duração.',
    img: '../../public/images/churrascometro-project.png',
    linkView: 'https://gallant-kalam-1522a2.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/churrascometro',
  },
  {
    name: 'Crypto Change',
    description:
      'Sistema para listar criptomoedas com valor atualizado com variação de valor na última hora, dia e semana e simulação de compra e venda com moedas de todos os países.',
    img: '../../public/images/crypto-change-project.png',
    linkView: 'https://mycryptochange.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/CryptoChange',
  },
  {
    name: 'Página de captura',
    description:
      'Página de captura fictícia com integração ao mailChimp, totalmente funcional.',
    img: '../../public/images/capture-page-project.png',
    linkView: 'https://elated-pasteur-66e249.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/pagCaptura',
  },
  {
    name: 'Clone Netflix',
    description:
      'Clone da plataforma netflix responsíva e desenvolvido com React.',
    img: '../../public/images/clone-netflix-project.png',
    linkView: 'https://ecstatic-panini-b088bb.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/CloneNetflix',
  },
  {
    name: 'Styled Components',
    description:
      'Projeto para fins de estudos da biblioteca Styled Components, com alteração de thema, claro e escuro',
    img: '../../public/images/styled-components-project.png',
    linkView: 'https://quizzical-fermat-59ab42.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/StyledComponents',
  },
  {
    name: 'Frypih',
    description: 'Sistema para controle de gastos entrada e saída.',
    img: '../../public/images/fripyh-project.png',
    linkView: 'https://pietrodessotti.github.io/Fripyh/',
    linkGithub: 'https://github.com/pietrodessotti/Fripyh',
  },
  {
    name: 'Foodfy',
    description:
      'Site de receitas desenvolvido durante o curso LaunchBase da rocketseat.',
    img: '../../public/images/foodfy-project.png',
    linkView: 'https://pietrodessotti.github.io/Foodfy/',
    linkGithub: 'https://github.com/pietrodessotti/Foodfy',
  },
];

export const listTecnologies = [
  { tecnologie: 'Html', level: 'Especialista', sizeBar: FULL_BAR },
  { tecnologie: 'Javascript', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'TypesScript', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'React', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'Redux', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'NextJs', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'CSS & Sass', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'Tailwind', level: 'Avançado', sizeBar: LARGER_BAR },
  { tecnologie: 'React Native', level: 'Intermediário', sizeBar: MEDIUM_BAR },
  { tecnologie: 'Wordpress', level: 'Intermediário', sizeBar: MEDIUM_BAR },
  { tecnologie: 'NodeJs', level: 'Básico', sizeBar: SMALL_BAR },
  { tecnologie: 'Vue', level: 'Básico', sizeBar: SMALL_BAR },
  { tecnologie: 'Angular', level: 'Básico', sizeBar: SMALL_BAR },
];

export const timeLine = [
  {
    year: '2021',
    text: 'Comecei a estagiar na D1 Jornadas Digitais, também estava no sétimo período da faculdade.',
  },
  {
    year: '2022',
    text: 'Me formei em Ciência da Computação, fui efetivado como trainee e 3 meses depois me tornei júnior.',
  },
  {
    year: '2023',
    text: 'Me aperfeiçoei no front-end usando técnologias como Tailwind e Vue, também aprendi NodeJs e MongoDB.',
  },
];
