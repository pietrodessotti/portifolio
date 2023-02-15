import { FULL_BAR, LARGER_BAR, MEDIUM_BAR, SMALL_BAR } from '../constants/home';

export const arrProjects = [
  {
    name: 'Churrascometro',
    description:
      'Cansado de fazer churrasco e não saber quanta carne / refrigerante comprar, criei um sistema para calcular quanto comprar por quantidade de pessoas e tempo de duração.',
    img: '/churrascometro-project.png',
    linkView: 'https://gallant-kalam-1522a2.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/churrascometro',
    id: 1
  },
  {
    name: 'Crypto Change',
    description:
      'Sistema para listar criptomoedas com valor atualizado com variação de valor na última hora, dia e semana e simulação de compra e venda com moedas de todos os países.',
    img: '/crypto-change-project.png',
    linkView: 'https://mycryptochange.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/CryptoChange',
    id: 2
  },
  {
    name: 'Página de captura',
    description:
      'Página de captura fictícia com integração ao mailChimp, totalmente funcional.',
    img: '/capture-page-project.png',
    linkView: 'https://elated-pasteur-66e249.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/pagCaptura',
    id: 3
  },
  {
    name: 'Clone Netflix',
    description:
      'Clone da plataforma netflix responsíva e desenvolvido com React.',
    img: '/clone-netflix-project.png',
    linkView: 'https://ecstatic-panini-b088bb.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/CloneNetflix',
    id: 4
  },
  {
    name: 'Styled Components',
    description:
      'Projeto para fins de estudos da biblioteca Styled Components, com alteração de thema, claro e escuro',
    img: '/styled-components-project.png',
    linkView: 'https://quizzical-fermat-59ab42.netlify.app/',
    linkGithub: 'https://github.com/pietrodessotti/StyledComponents',
    id: 5
  },
  {
    name: 'Frypih',
    description: 'Sistema para controle de gastos entrada e saída.',
    img: '/fripyh-project.png',
    linkView: 'https://pietrodessotti.github.io/Fripyh/',
    linkGithub: 'https://github.com/pietrodessotti/Fripyh',
    id: 6
  },
  {
    name: 'Foodfy',
    description:
      'Site de receitas desenvolvido durante o curso LaunchBase da rocketseat.',
    img: '/foodfy-project.png',
    linkView: 'https://pietrodessotti.github.io/Foodfy/',
    linkGithub: 'https://github.com/pietrodessotti/Foodfy',
    id: 7
  },
];

export const listTecnologies = [
  { tecnologie: 'Html', level: 'Especialista', sizeBar: FULL_BAR,
id:1 },
  { tecnologie: 'Javascript', level: 'Avançado', sizeBar: LARGER_BAR,
id:2 },
  { tecnologie: 'TypesScript', level: 'Avançado', sizeBar: LARGER_BAR,
id:3 },
  { tecnologie: 'React', level: 'Avançado', sizeBar: LARGER_BAR,
id:4 },
  { tecnologie: 'Redux', level: 'Avançado', sizeBar: LARGER_BAR,
id:5 },
  { tecnologie: 'NextJs', level: 'Avançado', sizeBar: LARGER_BAR,
id:6 },
  { tecnologie: 'CSS & Sass', level: 'Avançado', sizeBar: LARGER_BAR,
id:7 },
  { tecnologie: 'Tailwind', level: 'Avançado', sizeBar: LARGER_BAR,
id:8 },
  { tecnologie: 'React Native', level: 'Intermediário', sizeBar: MEDIUM_BAR,
id:9 },
  { tecnologie: 'Wordpress', level: 'Intermediário', sizeBar: MEDIUM_BAR,
id:10 },
  { tecnologie: 'NodeJs', level: 'Básico', sizeBar: SMALL_BAR,
id:11},
  { tecnologie: 'MongoDB', level: 'Básico', sizeBar: SMALL_BAR,
id:12 },
  { tecnologie: 'Vue', level: 'Básico', sizeBar: SMALL_BAR,
id:13 },
  { tecnologie: 'Angular', level: 'Básico', sizeBar: SMALL_BAR,
id:14 },
];

export const timeLine = [
  {
    year: '2021',
    text: 'Comecei a estagiar na D1 Jornadas Digitais, também estava no sétimo período da faculdade.',
    line: true,
    id: 1
  },
  {
    year: '2022',
    text: 'Me formei em Ciência da Computação, fui efetivado como trainee e 3 meses depois me tornei júnior.',
    line: true,
    id: 2
  },
  {
    year: '2023',
    text: 'Me aperfeiçoei no front-end usando técnologias como Tailwind e Vue, também aprendi NodeJs e MongoDB.',
    line: false,
    id: 3
  },
];