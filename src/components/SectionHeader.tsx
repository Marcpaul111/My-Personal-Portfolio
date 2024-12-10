type HeaderProps = {
    title: string;
    eyebrow: string;
    description: string;
}

export const SectionHeader = ({
    title,
    eyebrow,
    description
}: HeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6">
       {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/50 mt-4 max-w-md mx-auto">
       {description}
      </p>
    </>
  );
};
