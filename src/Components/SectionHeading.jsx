const SectionHeading = ({ subHeading, children = "Section title" }) => {
  return (
    <div className="max-w-max mx-auto space-y-3 text-xl">
      <p className="text-primary italic text-center px-5">
        {subHeading ? `-- ${subHeading} ---` : ""}
      </p>
      <h2 className="font-secondary text-5xl uppercase font-medium text-secondary py-4 px-10 border-t-2 border-b-2 border-gray-50 text-center tracking-wider">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
