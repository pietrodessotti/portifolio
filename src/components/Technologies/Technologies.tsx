import { listTecnologies } from '../../__MOCKS/Mocks';

import Gradient from '../Gradient';
import ContentTecnologie from './ContentTecnologie';

/**
 * @export
 * @component
 * @name Technologies
 *
 * @description
 * Responsible for render my skills with technologies.
 */
export function Technologies(): JSX.Element {
  const othersSkills = ['Git', 'Github', 'Trabalho em equipe', 'Metodologias ágeis'];

  return (
    <div id="technologies" className="mt-12 max-w-xs m-auto lg:max-w-3xl">
      <h1 className="my-3 pb-6 text-lg font-bold lg:text-2xl">Tecnologias</h1>
      {listTecnologies.map((skill) => (
        <div key={skill.id} className="pb-6">
          <ContentTecnologie tecnologie={skill.tecnologie} level={skill.level}>
            <Gradient type="Bar" optionalStyled={skill.sizeBar} />
          </ContentTecnologie>
        </div>
      ))}
      <section>
        <h1 className="pt-12 pb-6 font-bold lg:text-2xl">Outras Tecnologias e Habilidades</h1>

        <div>
          <ul className="grid grid-cols-2 lg:grid lg:grid-cols-3 lg:w-4/5">
            {othersSkills.map((item) => (
              <li key={`${item}-id`} className="py-2 gap-2 flex items-center lg:text-base">
                <Gradient />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
