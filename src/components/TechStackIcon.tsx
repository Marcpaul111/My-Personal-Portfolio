export const TechStackIcon = ({
  component,
}: {
  component: React.ElementType;
}) => {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(52 211 153)" />
          <stop offset="100%" stopColor="rgb(14 165 233)" />
        </linearGradient>
      </svg>
    </>
  );
};
