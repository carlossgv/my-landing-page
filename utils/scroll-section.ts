import { MouseEvent } from 'react';

const smoothScrollTo = (
  hrefId: string,
  e?: MouseEvent<HTMLAnchorElement, MouseEvent<Event, MouseEvent>>
) => {
  e?.preventDefault();

  const element = document.getElementById(hrefId);

  element?.scrollIntoView({
    block: 'start',
    behavior: 'smooth', // smooth scroll
  });
};

export default smoothScrollTo;
