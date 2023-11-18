const MenuItem = ({ data }) => {
  // console.log(Object.keys(data).join(", "));
  const { _id, name, recipe, image, category, price } = data || {};
  return (
    <div className="flex gap-4 items-start">
      <img
        className="w-20 aspect-square object-cover rounded-full rounded-tl-none border"
        src={image}
        alt=""
      />
      <div className="flex-grow">
        <h5 className="flex items-center gap-5 font-primary text-xl uppercase text-secondary font-medium">
          <span>{name}</span>
          <span className="border-t-2 border-dashed border-gray-600 flex-grow"></span>
        </h5>
        <p>{recipe}</p>
      </div>
      <p className="price text-primary font-semibold text-lg">${price}</p>
    </div>
  );
};

export default MenuItem;
