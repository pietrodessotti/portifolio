import { DEFAULT_BUTTON_STYLED } from '../../constants/home';
import calculateDifferenceBetweenDates from '../../utils/calculateDifferenceBetweenDates';
import Gradient from '../Gradient';

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

  return (
    <>
      <div className="mt-3 max-w-xs m-auto lg:hidden text-left">
        <div>
          <Gradient type="Title" text={helloTitle} />
          <h1 className="text-2xl">desenvolvedor frontend</h1>
          <p className="pt-3 text-gray text-sm">{descriptionShowCase}</p>
        </div>

        <div className="z-10 pt-3 relative">
          <img
            width="180px"
            height="180px"
            className="rounded-full hover:filter "
            src="/images/pietro-dessotti.jfif"
            alt="foto pessoal Pietro Dessotti"
          />
<div className='flex gap-6'>

          <Gradient nameButton="ver-curriculo" type="Button" >
            <a href="https://br.linkedin.com/in/pietro-dessotti">Veja meu curriculo</a>
          </Gradient>

          <a
                className={DEFAULT_BUTTON_STYLED}                id="fale-comigo-mobile"
                href="https://api.whatsapp.com/send/?phone=5511934415834&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale comigo
              </a>
        </div>
        </div>
      </div>

      <div className="max-[1023px]:hidden lg max-w-3xl m-auto pt-12 pb-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="z-10 mt-16 relative w-3/5">
            <Gradient type="Title" text={helloTitle} optionalStyled="text-4xl" />

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

        </div>
        <div className="block z-10">
          <p className="pt-3 text-gray w-3/5 text-sm">{descriptionShowCase}</p>


<div className='flex gap-6'>

          <Gradient nameButton="ver-curriculo" type="Button" >
            <a href="https://br.linkedin.com/in/pietro-dessotti">Veja meu curriculo</a>
          </Gradient>

              <a
                className={DEFAULT_BUTTON_STYLED}                id="fale-comigo-desktop"
                href="https://api.whatsapp.com/send/?phone=5511934415834&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                >
                Fale comigo
              </a>
                </div>
        </div>
      </div>
    </>
  );
}
