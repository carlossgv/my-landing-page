interface PageData {
  navigationBar: {
    aboutMe: { [key: string]: string };
    projects: { [key: string]: string };
    contact: { [key: string]: string };
  };
  generalInfo: {
    title: {
      [key: string]: string;
    };
  };
}

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
  generalInfo: {
    title: {
      en: 'General Information',
      es: 'Información general',
    },
  },
};

export default pageData;
