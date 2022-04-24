import { MouseEvent } from 'react';

const smoothScrollTo = (
  hrefId: string,
  e?: MouseEvent<HTMLAnchorElement, any>
) => {
  e?.preventDefault();

  const element = document.getElementById(hrefId);

  element?.scrollIntoView({
    block: 'start',
    behavior: 'smooth', // smooth scroll
  });
};

export default smoothScrollTo;
