import smoothScrollTo from '../../utils/scroll-section';

const InternalAnchor = ({
  children,
  hrefId,
  className,
}: {
  children: any;
  hrefId: string;
  className?: string;
}) => {
  return (
    <a href="" onClick={(e) => smoothScrollTo(hrefId, e)} className={className}>
      {children}
    </a>
  );
};

export default InternalAnchor;
