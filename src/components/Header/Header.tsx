import React from 'react';

import { SOCIAL_MEDIA, SOCIAL_MEDIA_SMALL } from '../../constants/home';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Responsible for header of application.
 */
export function Header(): JSX.Element {
  const title = <h1 className="text-2xl">P.D. portifolio</h1>;

  const itemsMenu = (
    <>
      <a
        href="#projects"
        className="font-bold py-2 text-gray rounded-lg hover:text-white active:text-underline"
      >
        Projetos
      </a>
      <a
        href="#technologies"
        className="font-bold py-2 text-gray rounded-lg hover:text-white active:text-underline"
      >
        Tecnologias
      </a>
      <a
        href="#aboutMe"
        className="font-bold py-2 text-gray rounded-lg hover:text-white active:text-underline"
      >
        Sobre mim
      </a>
    </>
  );

  const headerMobileStyled =
    'max-w-lg m-auto flex items-center justify-between lg:hidden';

  return (
    <>
      <>
        <div className={`p-6 ${headerMobileStyled}`}>
          {title}
          {SOCIAL_MEDIA}
        </div>
        <nav className={`px-6 pb-6 ${headerMobileStyled}`}>{itemsMenu}</nav>
      </>
      <div className="max-[1023px]:hidden lg:flex max-w-3xl m-auto py-6 mx-auto items-baseline justify-between">
        {title}
        <nav className="lg:flex gap-6">{itemsMenu}</nav>
        {SOCIAL_MEDIA_SMALL}
      </div>
    </>
  );
}
