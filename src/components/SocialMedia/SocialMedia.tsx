import { v4 as uuidv4 } from 'uuid';

import { Github } from '../Icons/Github';
import { Linkedin } from '../Icons/Linkedin';
import { WhatsApp } from '../Icons/WhatsApp';

/**
 * @export
 * @component
 * @name SocialMedia
 *
 * @description
 * Responsible for assemble the social media.
 */
export function SocialMedia(): JSX.Element {
  return (
    <div className="flex gap-6 items-center justify-between lg:gap-3">
      <a id={uuidv4()} href="https://br.linkedin.com/in/pietro-dessotti" target="_blank" rel="noreferrer">
        <Linkedin color="white" />
      </a>

      <a
        id={uuidv4()}
        href="https://api.whatsapp.com/send/?phone=5511934415834&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsApp color="white" />
      </a>
      <a id={uuidv4()} href="https://github.com/pietrodessotti" target="_blank" rel="noreferrer">
        <Github color="white" />
      </a>
    </div>
  );
}
