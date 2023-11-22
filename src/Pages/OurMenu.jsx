import { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import MenuItem from "../Components/MenuItem";

const OurMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentCat, setCurrentCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginateItems, setPaginateItems] = useState(null);

  const [totalItems, setTotalItems] = useState(menuItems.length);

  const categories = Array.from(
    new Set(menuItems.map((item) => item.category))
  );

  const filteredItems = currentCat
    ? menuItems.filter((item) => item.category === currentCat)
    : menuItems;

  const pageNumber = !loading ? Math.ceil(totalItems / 8) : 0;

  const pages = Array.from({ length: pageNumber });

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber + 1); // Add 1 to start pages from 1
    const startIndex = pageNumber * 8;
    const endIndex = startIndex + 8;
    const splicedItems = filteredItems.slice(startIndex, endIndex);
    setPaginateItems(splicedItems);
  };

  const handleCategoryFilter = (cat) => {
    setCurrentCat(cat);
    setCurrentPage(1);
  };

  // console.log(paginateItems);

  useEffect(() => {
    fetch("/menu.json")
      .then((data) => data.json())
      .then((data) => {
        setMenuItems(data);
        setTotalItems(data.length);
        setPaginateItems(data.slice(0, 8));

        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setTotalItems(filteredItems.length);
    handlePagination(currentPage - 1); // Update pagination when category changes
  }, [currentCat]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <PageHeader title="OUR MENU" subHeading="Would you like to try a dish?" />

      <section className="container-area space-y-12">
        <div className="flex gap-2 justify-center">
          <button
            className={`uppercase p-2 ${
              currentCat === null ? "border-b-2 border-primary" : ""
            }`}
            onClick={() => setCurrentCat(null)}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`uppercase p-2 ${
                currentCat === category ? "border-b-2 border-primary" : ""
              }`}
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.length > 1 &&
            paginateItems.map((item) => (
              <MenuItem key={item._id} data={item} />
            ))}
        </div>

        <div className="flex items-center justify-center gap-3 text-2xl">
          {pageNumber > 0 &&
            pages.map((page, index) => (
              <button
                className={`p-2 ${
                  currentPage === index + 1 ? "text-primary" : ""
                }`}
                key={index}
                onClick={() => handlePagination(index)}
              >
                {index + 1}
              </button>
            ))}
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
