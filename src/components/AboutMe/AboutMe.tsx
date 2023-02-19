import { timeLine } from '../../__MOCKS/Mocks';

import Gradient from '../Gradient';
import ContentAboutMe from './ContentAboutMe';

/**
 * @export
 * @component
 * @name AboutMe
 *
 * @description
 * Responsible for render section of about me.
 */
export function AboutMe(): JSX.Element {
  return (
    <div id="aboutMe" className="pt-12 my-3 max-w-xs m-auto lg:max-w-3xl">
      <h1 className="pb-6 text-lg font-bold lg:text-2xl">Carreira</h1>
      <div className="lg:grid lg:grid-cols-3 lg:w-full">
        {timeLine.map((line) => (
          <ContentAboutMe
            key={line.id}
            year={line.year}
            text={line.text}
            timeLine={line.line}
          >
            <Gradient />
          </ContentAboutMe>
        ))}
      </div>
    </div>
  );
}
