interface PageData {
  navigationBar: {
    aboutMe: { [key: string]: string };
    projects: { [key: string]: string };
    contact: { [key: string]: string };
  };
  intro: {
    title: {
      [key: string]: string;
    };
    description: {
      [key: string]: string;
    };
    button: {
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
  },
};

export default pageData;
