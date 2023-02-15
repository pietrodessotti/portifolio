import { arrProjects } from '../../__MOCKS/Mocks';
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
              <Gradient type="Button" nameButton={`${item.name  }-button`}>
                <a 
                  id={`${item.name}-project-netlify`}
                  href={item.linkView}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                </a>
              </Gradient>

              <a
                className="my-6 px-6 py-3 rounded-full border-2 border-inherit"
                id={`${item.name}-project-github`}
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
