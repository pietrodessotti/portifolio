import React from 'react';

import {
  FULL_BAR,
  LARGER_BAR,
  MEDIUM_BAR,
  SMALL_BAR,
} from '../../constants/home';
import Gradient from '../Gradient';
import ContentTecnologies from './ContentTecnologies';

/**
 * @export
 * @component
 * @name Technologies
 *
 * @description
 * Responsible for render my skills with technologies.
 */
export function Technologies(): JSX.Element {
  const listTecnologies = [
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

  const othersSkills = [
    'Git',
    'Github',
    'Trabalho em equipe',
    'Metodologias ágeis',
  ];

  return (
    <div id="technologies" className="mt-12 max-w-xs m-auto lg:max-w-3xl">
      <h1 className="my-3 pb-6 text-lg font-bold lg:text-2xl">Tecnologias</h1>
      {listTecnologies.map((skill) => (
        <div className="pb-6">
          <ContentTecnologies tecnologie={skill.tecnologie} level={skill.level}>
            <Gradient type="Bar" optionalStyled={skill.sizeBar} />
          </ContentTecnologies>
        </div>
      ))}
      <section>
        <h1 className="pt-12 pb-6 font-bold lg:text-2xl">
          Outras Tecnologias e Habilidades
        </h1>

        <div>
          <ul className="grid grid-cols-2 lg:grid lg:grid-cols-3 lg:w-4/5">
            {othersSkills.map((item) => (
              <li className="py-2 gap-2 flex items-center lg:text-base">
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
