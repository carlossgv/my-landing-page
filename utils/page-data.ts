import LandingPageImage from '../public/assets/images/landing-page.png';
import TmuxScriptImage from '../public/assets/images/tmux-app.png';
import AccountingCRMImage from '../public/assets/images/accounting-app.png';
import CSSLogo from '../public/assets/icons/tech-stack/css.svg';
import DjangoLogo from '../public/assets/icons/tech-stack/django.svg';
import GCPLogo from '../public/assets/icons/tech-stack/google-cloud.svg';
import HTMLLogo from '../public/assets/icons/tech-stack/html.svg';
import JavascriptLogo from '../public/assets/icons/tech-stack/javascript.svg';
import NestJSLogo from '../public/assets/icons/tech-stack/nestjs.svg';
import NextJSLogo from '../public/assets/icons/tech-stack/next-js.svg';
import NodeJSLogo from '../public/assets/icons/tech-stack/nodejs.svg';
import PythonLogo from '../public/assets/icons/tech-stack/python.svg';
import ReactNativeLogo from '../public/assets/icons/tech-stack/react-native.svg';
import ReactLogo from '../public/assets/icons/tech-stack/react.svg';
import TypescriptLogo from '../public/assets/icons/tech-stack/typescript.svg';

type PageData = {
  navigationBar: {
    [key: string]: {
      [key: string]: string;
    };
  };
  intro: {
    [key: string]: {
      [key: string]: string;
    };
  };
  repos: RepoData[];
  techStack: {
    [key: string]: {
      [key: string]: string;
    };
  };
  contactMe: {
    [key: string]: {
      [key: string]: string;
    };
  };
};

type RepoData = {
  [key: string]: { [key: string]: string } | string | any;
};

const pageData: PageData = {
  navigationBar: {
    aboutMe: {
      en: 'About me',
      es: 'Acerca de mi',
    },
    projects: {
      en: 'Projects',
      es: 'Proyectos',
    },
    contact: {
      en: 'Contact',
      es: 'Contacto',
    },
  },
  intro: {
    title: {
      en: 'How I Get It Done',
      es: 'Como hacerlo posible',
    },
    description: {
      en: 'Harum trium sententiarum nulli prorsus assentior. Nec enim illa prima vera est,odum in se quisque sit, sic in amicum sit animatus',
      es: 'Harum trium sententiarum nulli prorsus assentior. Nec enim illa prima vera est,odum in se quisque sit, sic in amicum sit animatus',
    },
    button: {
      en: 'Explore',
      es: 'Explorar',
    },
    copyCode: {
      en: 'Copy code to clipboard',
      es: 'Copiar código al portapapeles',
    },
    copiedCode: {
      en: 'Code copied to clipboard',
      es: 'Código copiado al portapapeles',
    },
  },
  repos: [
    {
      title: {
        en: 'Tmux Script Creator',
        es: 'Creador Scripts para Tmux',
      },
      description: {
        en: 'Simple GUI to create multiple windows and panes in Tmux',
        es: 'GUI simple para crear múltiples ventanas y paneles en Tmux',
      },
      imageUrl: TmuxScriptImage,
      link: 'https://github.com/carlossgv/tmux-script-creator',
    },
    {
      title: {
        en: 'My Landing Page',
        es: 'Mi Página Web',
      },
      description: {
        en: 'This very website source code!',
        es: '¡El código fuente de esta misma página!',
      },
      imageUrl: LandingPageImage,
      link: 'https://github.com/carlossgv/my-landing-page',
    },
    {
      title: {
        en: 'Accounting CRM',
        es: 'CRM de Contabilidad',
      },
      description: {
        en: 'Income/Expenses custom application for restaurant client',
        es: 'Aplicación de control de gastos/ingresos creado para un cliente restaurant',
      },
      imageUrl: AccountingCRMImage,
      link: 'https://github.com/carlossgv/dosbandidos_project',
    },
  ],
  techStack: {
    firstSentence: {
      en: 'The Stack Of',
      es: 'El Stack De',
    },
    secondSentence: {
      en: 'Technologies',
      es: 'Tecnologías',
    },
    thirdSentence: {
      en: 'I Use',
      es: 'Que Uso',
    },
  },
  contactMe: {
    preTitle: {
      en: "Let's get started",
      es: '¡Empecemos!',
    },
    title: {
      en: 'Get A Free\n Consultation',
      es: 'Consulta\n Gratuita',
    },
    nameLabel: {
      en: 'Name',
      es: 'Nombre',
    },
    emailLabel: {
      en: 'Email',
      es: 'Email',
    },
    messageLabel: {
      en: 'Message',
      es: 'Mensaje',
    },
    buttonText: {
      en: 'Send Message',
      es: 'Enviar Mensaje',
    },
    additionalEmail: {
      en: 'OR EMAIL',
      es: 'O EMAIL',
    },
    emptyFieldError: {
      en: 'Please fill out this field',
      es: 'Favor llenar este campo',
    },
    invalidEmailError: {
      en: 'Invalid email',
      es: 'Email inválido',
    },
  },
};

export const techStackData: TechStackData[] = [
  { name: 'Typescript', logo: TypescriptLogo },
  { name: 'Javascript', logo: JavascriptLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'React', logo: ReactLogo },
  { name: 'NextJS', logo: NextJSLogo },
  { name: 'React Native', logo: ReactNativeLogo },
  { name: 'NodeJS', logo: NodeJSLogo },
  { name: 'NestJS', logo: NestJSLogo },
  { name: 'CGP', logo: GCPLogo },
  { name: 'Django', logo: DjangoLogo },
  { name: 'CSS', logo: CSSLogo },
  { name: 'HTML', logo: HTMLLogo },
];

export type TechStackData = {
  name: string;
  logo: string;
};

export default pageData;
