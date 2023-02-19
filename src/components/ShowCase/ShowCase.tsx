import calculateDifferenceBetweenDates from '../../utils/calculateDifferenceBetweenDates';
import GradientProps from '../Gradient';

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
      nameButton="baixar-curriculo"
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

        {/* <div className="z-1 mt-28 absolute left-0 w-2/5">
            <div className="rounded-full w-60 h-60 bg-gradient-to-r from-[#a84ccf] to-[#00c2af] p-[1px] ">
              <div className="h-full w-full bg-dark-blue rounded-full" />
            </div>
          </div> */}

        {/* <div className='absolute mt-36 w-60 h-60 border-[1px] border border-b-[#a84ccf] border-t-[#00c2af] border-l-[#00c2af] border-r-[#a84ccf] blur-[3px] rounded-full' /> */}
        <div className="z-10 pt-3 relative">
          <img
            width="180px"
            height="180px"
            className="rounded-full hover:filter "
            src="/images/pietro-dessotti.jfif"
            alt="foto pessoal Pietro Dessotti"
          />
          {/* <div className='ml-24 w-36 h-36 border-[1px] border border-b-[#a84ccf] border-t-[#00c2af] border-l-[#00c2af] border-r-[#a84ccf] blur-[3px] rounded-full' /> */}

          {downloadButton}
        </div>
      </div>

      <div className="max-[1023px]:hidden lg max-w-3xl m-auto pt-12 pb-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="z-10 mt-16 relative w-3/5">
            <GradientProps
              type="Title"
              text={helloTitle}
              optionalStyled="text-4xl"
            />

            <h1 className="z-10 text-4xl">desenvolvedor frontend</h1>
          </div>
          <div className="z-10 mt-16 absolute right-0 w-2/5">
            <img
              width="180px"
              height="180px"
              className="rounded-full hover:filter "
              src="/images/pietro-dessotti.jfif"
              alt="foto pessoal Pietro Dessotti"
            />
          </div>

          <div className="mt-72 mr-48 absolute right-0 w-2/5 h-96">
            <div className="rounded-full w-72 h-72 bg-gradient-to-r from-[#a84ccf] to-[#00c2af] p-[1px] ">
              <div className="h-full w-full bg-dark-blue rounded-full" />
            </div>
          </div>
        </div>
        <div className="block z-10">
          <p className="pt-3 text-gray w-3/5 text-sm">{descriptionShowCase}</p>

          {downloadButton}
        </div>
      </div>
    </>
  );
}
