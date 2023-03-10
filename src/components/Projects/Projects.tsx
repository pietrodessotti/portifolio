import { arrProjects } from '../../__MOCKS/Mocks';
import Gradient from '../Gradient';
import { DEFAULT_BUTTON_STYLED } from '../../constants/home';


/**
 * @export
 * @component
 * @name
 *
 * @description
 * Responsible for render all projects.
 */
export function Projects(): JSX.Element {
  return (
    <div id="projects" className="mt-3 max-w-xs m-auto lg:max-w-3xl">
      <h1 className="my-3 pb-6 text-lg font-bold lg:text-2xl">Projetos</h1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-3">
        {arrProjects?.map((item) => (
          <div key={item.id} className="mb-6 px-6 border border-blue rounded-lg">
            <img
              width="100%"
              height="100%"
              className="py-6 text-left m-auto my-6 h-48"
              src={`/images${item.img}`}
              alt={item.name}
            />
            <h1 className="pb-3 text-base font-bold">{item.name}</h1>
            <p className="pb-3 text-sm text-gray">{item.description}</p>

            <div className="flex items-center justify-between">
              <a id={`${item.name}-project-netlify`} href={item.linkView} target="_blank" rel="noopener noreferrer">
                <Gradient type="Button" nameButton={`${item.name}-button`} text="Ver projeto" />
              </a>

              <a
                className={DEFAULT_BUTTON_STYLED}
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
