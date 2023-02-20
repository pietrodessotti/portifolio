import SocialMedia from '../SocialMedia';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Responsible for header of application.
 */
export function Header(): JSX.Element {
  const title = <h1 className="text-2xl">Pietro Dessotti</h1>;
  const textStyle = 'font-bold py-2 text-gray rounded-lg hover:text-white active:text-underline';

  const itemsMenu = (
    <>
      <a className={`${textStyle}`} href="#projects">
        Projetos
      </a>
      <a className={`${textStyle}`} href="#technologies">
        Tecnologias
      </a>
      <a className={`${textStyle}`} href="#aboutMe">
        Sobre mim
      </a>
    </>
  );

  const headerMobileStyled = 'max-w-lg m-auto flex items-center justify-between lg:hidden';

  return (
    <div className="sticky top-0 z-50 bg-dark-blue">
      <div className={`p-6 ${headerMobileStyled}`}>
        {title}
        <SocialMedia />
      </div>
      <nav className={`px-6 pb-6 ${headerMobileStyled}`}>{itemsMenu}</nav>

      <div className="max-[1023px]:hidden lg:flex max-w-3xl m-auto py-6 mx-auto items-baseline justify-between">
        {title}
        <nav className="lg:flex gap-6">{itemsMenu}</nav>
        <SocialMedia />
      </div>
    </div>
  );
}
