import slider1 from "./../assets/home/01.jpg";

const HomeSlider = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url("${slider1}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default HomeSlider;
