import LandingPageImage from '../public/assets/images/landing-page.png';
import TmuxScriptImage from '../public/assets/images/tmux-app.png';
import AccountingCRMImage from '../public/assets/images/accounting-app.png';

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
      es: 'Cómo lo hago',
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
};

export default pageData;
