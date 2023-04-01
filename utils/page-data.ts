import LandingPageImage from "../public/assets/images/landing-page.png";
import TmuxScriptImage from "../public/assets/images/tmux-app.png";
import AccountingCRMImage from "../public/assets/images/accounting-app.png";
import CSSLogo from "../public/assets/icons/tech-stack/css.svg";
import DjangoLogo from "../public/assets/icons/tech-stack/django.svg";
import GCPLogo from "../public/assets/icons/tech-stack/google-cloud.svg";
import HTMLLogo from "../public/assets/icons/tech-stack/html.svg";
import JavascriptLogo from "../public/assets/icons/tech-stack/javascript.svg";
import NestJSLogo from "../public/assets/icons/tech-stack/nestjs.svg";
import NextJSLogo from "../public/assets/icons/tech-stack/next-js.svg";
import NodeJSLogo from "../public/assets/icons/tech-stack/nodejs.svg";
import PythonLogo from "../public/assets/icons/tech-stack/python.svg";
import ReactNativeLogo from "../public/assets/icons/tech-stack/react-native.svg";
import ReactLogo from "../public/assets/icons/tech-stack/react.svg";
import TypescriptLogo from "../public/assets/icons/tech-stack/typescript.svg";

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
  aboutMe: {
    [key: string]: {
      [key: string]: string;
    };
  };
  repos: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | RepoData[];
  };
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

export type RepoData = {
  [key: string]: { [key: string]: string } | string | any;
};

const pageData: PageData = {
  navigationBar: {
    aboutMe: {
      en: "About me",
      es: "Acerca de mi",
    },
    projects: {
      en: "Projects",
      es: "Proyectos",
    },
    contact: {
      en: "Contact",
      es: "Contacto",
    },
  },
  intro: {
    title: {
      en: `Let's get it done`,
      es: "Hagámoslo posible",
    },
    description: {
      en: `Welcome to my website! 

I will create customized web and mobile apps that meet your unique needs. 

Whether you're a small business owner, entrepreneur, or just someone with a great idea, I can help turn your vision into a reality.

Let's work together to bring your vision to life!`,
      es: `¡Bienvenido a mi sitio web!

Crearé aplicaciones web y móviles personalizadas que satisfagan tus necesidades únicas.

Ya sea que seas dueño de una pequeña empresa, emprendedor o simplemente alguien con una gran idea, puedo ayudarte a convertir tu visión en realidad.

¡Trabajemos juntos para hacer realidad tu visión!`,
    },
    button: {
      en: "Explore",
      es: "Explorar",
    },
    copyCode: {
      en: "Copy code to clipboard",
      es: "Copiar código al portapapeles",
    },
    copiedCode: {
      en: "Code copied to clipboard",
      es: "Código copiado al portapapeles",
    },
  },
  aboutMe: {
    description: {
      en: `I'm a fullstack software developer based in Chile with a passion for creating web and mobile applications. 

Before transitioning to development, I earned a bachelor's degree in mechanical engineering and worked in technical sales. 

With my diverse background and expertise, I bring a unique perspective to software development and always strive to exceed my clients' expectations. 

I look forward to helping you bring your ideas to life!`,
      es: `Soy un desarrollador de software Full-Stack con sede en Chile y una gran pasión por crear aplicaciones web y móviles.

Antes de mi transición a la programación, me titulé como Ingeniero Mecánico y trabajé en ventas técnicas.

Gracias a mi experiencia y formación diversa, aporto una perspectiva única al desarrollo de software y siempre me esfuerzo por superar las expectativas de mis clientes.

¡Espero poder ayudarte a hacer realidad tus ideas!`,
    },
  },
  repos: {
    title: {
      en: "Some of my projects",
      es: "Algunos de mis proyectos",
    },
    subtitle: {
      en: "Github Repositories",
      es: "Repositorios de Github",
    },
    reposData: [
      {
        title: {
          en: "Tmux Script Creator",
          es: "Creador Scripts para Tmux",
        },
        description: {
          en: "Simple GUI to create multiple windows and panes in Tmux",
          es: "GUI simple para crear múltiples ventanas y paneles en Tmux",
        },
        imageUrl: TmuxScriptImage,
        link: "https://github.com/carlossgv/tmux-script-creator",
      },
      {
        title: {
          en: "My Landing Page",
          es: "Mi Página Web",
        },
        description: {
          en: "This very website source code!",
          es: "¡El código fuente de esta misma página!",
        },
        imageUrl: LandingPageImage,
        link: "https://github.com/carlossgv/my-landing-page",
      },
      {
        title: {
          en: "Accounting CRM",
          es: "CRM de Contabilidad",
        },
        description: {
          en: "Income/Expenses custom application for restaurant client",
          es: "Aplicación de control de gastos/ingresos creado para un cliente restaurant",
        },
        imageUrl: AccountingCRMImage,
        link: "https://github.com/carlossgv/dosbandidos_project",
      },
    ],
  },
  techStack: {
    firstSentence: {
      en: "The Stack Of",
      es: "El Stack De",
    },
    secondSentence: {
      en: "Technologies",
      es: "Tecnologías",
    },
    thirdSentence: {
      en: "I Use",
      es: "Que Uso",
    },
  },
  contactMe: {
    preTitle: {
      en: "Let's get started",
      es: "¡Empecemos!",
    },
    title: {
      en: "Contact me!",
      es: "¡Contáctame!",
    },
    nameLabel: {
      en: "Name",
      es: "Nombre",
    },
    emailLabel: {
      en: "Email",
      es: "Email",
    },
    messageLabel: {
      en: "Message",
      es: "Mensaje",
    },
    buttonText: {
      en: "Send Message",
      es: "Enviar Mensaje",
    },
    additionalEmail: {
      en: "OR EMAIL",
      es: "O EMAIL",
    },
    emptyFieldError: {
      en: "Please fill out this field",
      es: "Favor llenar este campo",
    },
    invalidEmailError: {
      en: "Invalid email",
      es: "Email inválido",
    },
    emailSentTitle: {
      en: "Email sent!",
      es: "¡Email enviado!",
    },
    emailSentMessage: {
      en: `Thanks for reaching out! I'll contact you as soon as possible.`,
      es: "¡Muchas gracias! Te contactaré de vuelta lo más rápido posible.",
    },
  },
};

export const techStackData: TechStackData[] = [
  { name: "Typescript", logo: TypescriptLogo },
  { name: "Javascript", logo: JavascriptLogo },
  { name: "Python", logo: PythonLogo },
  { name: "React", logo: ReactLogo },
  { name: "NextJS", logo: NextJSLogo },
  { name: "React Native", logo: ReactNativeLogo },
  { name: "NodeJS", logo: NodeJSLogo },
  { name: "NestJS", logo: NestJSLogo },
  { name: "CGP", logo: GCPLogo },
  { name: "Django", logo: DjangoLogo },
  { name: "CSS", logo: CSSLogo },
  { name: "HTML", logo: HTMLLogo },
];

export type TechStackData = {
  name: string;
  logo: string;
};

export default pageData;
