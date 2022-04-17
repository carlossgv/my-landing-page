interface PageData {
  generalInfo: {
    title: {
      [key: string]: string;
    };
  };
}

const pageData: PageData = {
  generalInfo: {
    title: {
      en: 'General Information',
      es: 'Información general',
    },
  },
};

export default pageData;
