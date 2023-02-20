import Gradient from '../Gradient';
import SocialMedia from '../SocialMedia';

/**
 * @export
 * @component
 * @name Footer
 *
 * @description
 * Component responsible for footer of screen.
 */
export function Footer(): JSX.Element {
  const contactMe = <Gradient type="Title" text="Entre em contato" optionalStyled="text-sm" />;
  return (
    <>
      <div className="lg:hidden px-6 py-12 max-w-lg m-auto flex items-center justify-between">
        {contactMe}
        <SocialMedia />
      </div>

      <div className="max-[1023px]:hidden lg flex max-w-3xl m-auto py-12 mx-auto items-baseline justify-between">
        {contactMe}
        <a href="mailto:pietrohdessotti@gmail.com?subject=Site Portifólio&body=Olá, vim através do seu site, gostaria de saber mais sobre seus serviços.">
          pietrohdessotti@gmail.com
        </a>
        <SocialMedia />
      </div>
      <div className="py-6 text-center text-gray text-sm">Copyright © 2023 Pietro Dessotti</div>
    </>
  );
}
