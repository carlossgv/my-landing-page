const InternalAnchor = ({
  children,
  hrefId,
}: {
  children: any;
  hrefId: string;
}) => {
  const smoothScrollTo = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const element = document.getElementById(hrefId);

    element?.scrollIntoView({
      block: 'start',
      behavior: 'smooth', // smooth scroll
    });
  };

  return (
    <a href="" onClick={smoothScrollTo}>
      {children}
    </a>
  );
};

export default InternalAnchor;
