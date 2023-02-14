import calculateDifferenceBetweenDates from '../../utils/calculateDifferenceBetweenDates';

import GradientProps from '../Gradient';
import { Github } from '../Icons/Github';

/**
 * @export
 * @component
 * @name ShowCase
 *
 * @description
 * Responsible for render section of about me.
 */
export function ShowCase(): JSX.Element {
  const timeExperience = calculateDifferenceBetweenDates({
    year: 2021,
    month: 1,
    day: 1,
  });

  const helloTitle = 'Olá, sou o Pietro,';

  const descriptionShowCase = `Bacharel em Ciência da Computação, desenvolvo para frontend a
  ${timeExperience}, sempre trabalhando com padrões de qualidade de
  código e as melhores ferramentas do mercado.`;

  const downloadButton = (
    <GradientProps
      type="Button"
      text="Baixar curriculo"
      optionalStyled="text-sm"
    />
  );

  return (
    <>
      <div className="mt-3 max-w-xs m-auto lg:hidden text-left">
        <div>
          <GradientProps type="Title" text={helloTitle} />
          <h1 className="text-2xl">desenvolvedor frontend</h1>
          <p className="pt-3 text-gray text-sm">{descriptionShowCase}</p>
        </div>
        <div className="pt-3">
          <Github width="180px" height="180px" color="white" />
          {/* <img src="" alt="" /> */}

          {downloadButton}
        </div>
      </div>

      <div className="max-[1023px]:hidden lg max-w-3xl m-auto pt-12 pb-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="mt-16 relative w-3/5">
            <GradientProps
              type="Title"
              text={helloTitle}
              optionalStyled="text-4xl"
            />
            <h1 className="text-4xl">desenvolvedor frontend</h1>
          </div>
          <div className="mt-16 absolute right-0 w-2/5">
            <Github width="180px" height="180px" color="white" />
          </div>
          {/* <img src="" alt="" /> */}
        </div>
        <div>
          <p className="pt-3 text-gray w-3/5 text-sm">{descriptionShowCase}</p>

          {downloadButton}
          <div />
        </div>
      </div>
    </>
  );
}
