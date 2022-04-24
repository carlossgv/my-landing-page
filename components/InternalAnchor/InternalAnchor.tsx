const InternalAnchor = ({
  children,
  hrefId,
  className,
}: {
  children: any;
  hrefId: string;
  className?: string;
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
    <a href="" onClick={smoothScrollTo} className={className}>
      {children}
    </a>
  );
};

export default InternalAnchor;
