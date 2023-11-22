import sectionBg from "./../assets/menu/banner3.jpg";

const PageHeader = ({
  title = "Page Header",
  subHeading,
  bgImage = sectionBg,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${bgImage}")`,
        minHeight: "400px",
      }}
      className="bg-cover bg-center px-20 py-20"
    >
      <div className="p-20 mt-20 text-center bg-[rgba(0,0,0,0.7)] font-primary space-y-2">
        <h2 className="text-white text-8xl font-bold uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-white font-semibold uppercase tracking-wider">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
