import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import MenuItem from "../MenuItem";
import { Link } from "react-router-dom";

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);

  const splitItems = menuItems.slice(0, 8);

  // console.log(splitItems);

  useEffect(() => {
    fetch("/menu.json")
      .then((data) => data.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <section className="container-area space-y-12">
      <SectionHeading subHeading="Check it out">FROM OUR MENU</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {splitItems.length > 0 &&
          splitItems.map((item) => <MenuItem key={item._id} data={item} />)}
      </div>
      <Link className="block w-max mx-auto  btn btn-outline hover:btn-primary">
        View full menu
      </Link>
    </section>
  );
};

export default MenuSection;
