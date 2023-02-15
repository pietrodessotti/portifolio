import { Github } from '../components/Icons/Github';
import { Linkedin } from '../components/Icons/Linkedin';
import { WhatsApp } from '../components/Icons/WhatsApp';

export const SOCIAL_MEDIA = (
  <div className="flex gap-6 items-center justify-between">
    <a
      id="linkedin-project-netlify"
      href="https://br.linkedin.com/in/pietro-dessotti"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin color="white" height={30} width={30} />
    </a>

    <a
      id="whatsapp-project-netlify"
      href="https://api.whatsapp.com/send/?phone=5511934415834&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsApp color="white" height={30} width={30} />
    </a>
    <a
      id="github-project-netlify"
      href="https://github.com/pietrodessotti"
      target="_blank"
      rel="noreferrer"
    >
      <Github color="white" height={30} width={30} />
    </a>
  </div>
);

export const SOCIAL_MEDIA_SMALL = (
  <div className="flex gap-3 items-center justify-between">
    <a
      id="linkedin-small-project-netlify"
      href="https://br.linkedin.com/in/pietro-dessotti"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin color="white" height={20} width={20} />
    </a>

    <a
      id="whatsapp-small-project-netlify"
      href="https://api.whatsapp.com/send/?phone=5511934415834&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsApp color="white" height={20} width={20} />
    </a>
    <a
      id="github-small-project-netlify"
      href="https://github.com/pietrodessotti"
      target="_blank"
      rel="noreferrer"
    >
      <Github color="white" height={20} width={20} />
    </a>
  </div>
);

export const SMALL_BAR = `w-1/4 h-3`;
export const MEDIUM_BAR = `w-2/4 h-3`;
export const LARGER_BAR = `w-3/4 h-3`;
export const FULL_BAR = `w-full h-3`;
