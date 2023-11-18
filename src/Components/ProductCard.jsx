import { Link } from "react-router-dom";
import blogImg from "./../assets/home/slide1.jpg";

const ProductCard = () => {
  return (
    <article className="max-w-sm bg-gray-25 rounded-lg overflow-hidden border border-gray-100">
      <img src={blogImg} className="w-full aspect-video object-cover" alt="" />
      <div className="flex flex-col gap-3 items-center px-5 py-8 text-center">
        <h5 className="text-3xl font-medium">Caeser Salad</h5>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <Link className="btn btn-outline hover:btn-primary">Add to cart</Link>
      </div>
    </article>
  );
};

export default ProductCard;
