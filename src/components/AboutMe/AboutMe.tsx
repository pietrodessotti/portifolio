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
  const timeLine = [
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

  return (
    <div id="aboutMe" className="pt-12 my-3 max-w-xs m-auto lg:max-w-3xl">
      <h1 className="pb-6 text-lg font-bold lg:text-2xl">Carreira</h1>
      <div className="lg:grid lg:grid-cols-3 lg:w-full">
        {timeLine.map((line) => (
          <ContentAboutMe year={line.year} text={line.text}>
            <Gradient />
          </ContentAboutMe>
        ))}
      </div>
    </div>
  );
}
