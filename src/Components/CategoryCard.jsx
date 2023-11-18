import { Link } from "react-router-dom";
import category1 from "./../assets/home/slide1.jpg";

const CategoryCard = ({ name, bgImage = category1, link }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${bgImage}")`,
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "320px",
      }}
    >
      <Link
        to={link}
        className="h-full flex justify-center items-end p-5 text-2xl"
      >
        <h4 className="uppercase text-white">{name}</h4>
      </Link>
    </div>
  );
};

export default CategoryCard;
