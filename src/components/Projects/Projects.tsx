import Gradient from '../Gradient';

/**
 * @export
 * @component
 * @name
 *
 * @description
 * Responsible for render all projects.
 */
export function Projects(): JSX.Element {
  // const [projects, setProjects] = useState(null);
  // const getProjects = async () => {
  //   const API = 'https://api.github.com/users/PietroDessotti/repos';
  //   await fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => setProjects(data));
  // };

  // useEffect(() => {
  //   getProjects();
  // }, []);

  const arrProjects = [
    {
      name: 'Churrascometro',
      description:
        'Cansado de fazer churrasco e não saber quanta carne / refrigerante comprar, criei um sistema para calcular quanto comprar por quantidade de pessoas e tempo de duração.',
      img: '../../../public/images/churrascometro-project.png',
      linkView: 'https://gallant-kalam-1522a2.netlify.app/',
      linkGithub: 'https://github.com/pietrodessotti/churrascometro',
    },
    {
      name: 'Crypto Change',
      description:
        'Sistema para listar criptomoedas com valor atualizado com variação de valor na última hora, dia e semana e simulação de compra e venda com moedas de todos os países.',
      img: '../../../public/images/crypto-change-project.png',
      linkView: 'https://mycryptochange.netlify.app/',
      linkGithub: 'https://github.com/pietrodessotti/CryptoChange',
    },
    {
      name: 'Página de captura',
      description:
        'Página de captura fictícia com integração ao mailChimp, totalmente funcional.',
      img: '../../../public/images/capture-page-project.png',
      linkView: 'https://elated-pasteur-66e249.netlify.app/',
      linkGithub: 'https://github.com/pietrodessotti/pagCaptura',
    },
    {
      name: 'Clone Netflix',
      description:
        'Clone da plataforma netflix responsíva e desenvolvido com React.',
      img: '../../../public/images/clone-netflix-project.png',
      linkView: 'https://ecstatic-panini-b088bb.netlify.app/',
      linkGithub: 'https://github.com/pietrodessotti/CloneNetflix',
    },
    {
      name: 'Styled Components',
      description:
        'Projeto para fins de estudos da biblioteca Styled Components, com alteração de thema, claro e escuro',
      img: '../../../public/images/styled-components-project.png',
      linkView: 'https://quizzical-fermat-59ab42.netlify.app/',
      linkGithub: 'https://github.com/pietrodessotti/StyledComponents',
    },
    {
      name: 'Frypih',
      description: 'Sistema para controle de gastos entrada e saída.',
      img: '../../../public/images/fripyh-project.png',
      linkView: 'https://pietrodessotti.github.io/Fripyh/',
      linkGithub: 'https://github.com/pietrodessotti/Fripyh',
    },
    {
      name: 'Foodfy',
      description:
        'Site de receitas desenvolvido durante o curso LaunchBase da rocketseat.',
      img: '../../../public/images/foodfy-project.png',
      linkView: 'https://pietrodessotti.github.io/Foodfy/',
      linkGithub: 'https://github.com/pietrodessotti/Foodfy',
    },
  ];

  return (
    <div id="projects" className="mt-3 max-w-xs m-auto lg:max-w-3xl">
      <h1 className="my-3 pb-6 text-lg font-bold lg:text-2xl">Projetos</h1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-3">
        {arrProjects?.map((item) => (
          <div className="mb-6 px-6 border border-blue rounded-lg">
            <img
              className="py-6 text-left m-auto my-6 h-48"
              src={item.img}
              alt={item.name}
            />
            <h1 className="pb-3 text-base font-bold">{item.name}</h1>
            <p className="pb-3 text-sm text-gray">{item.description}</p>

            <div className="flex items-center justify-between">
              <Gradient type="Button" optionalStyled="">
                <a
                  id={`${item.name}-project`}
                  aria-hidden
                  href={item.linkView}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                </a>
              </Gradient>

              <a
                className="my-6 px-6 py-3 rounded-full border-2 border-inherit"
                id={`${item.name}-project`}
                aria-hidden
                href={item.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
