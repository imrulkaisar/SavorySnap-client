import CategoryCard from "../Components/CategoryCard";
import HomeSlider from "../Components/HomeSlider";
import SectionHeading from "../Components/SectionHeading";

// images
import category1 from "./../assets/home/slide1.jpg";
import category2 from "./../assets/home/slide2.jpg";
import category3 from "./../assets/home/slide3.jpg";
import category4 from "./../assets/home/slide4.jpg";
import aboutBg from "./../assets/home/chef-service.jpg";
import MenuSection from "../Components/Home/MenuSection";
import ProductCard from "../Components/ProductCard";

const Homepage = () => {
  return (
    <div>
      <HomeSlider />
      <section>
        <div className="container-area">
          <SectionHeading subHeading="From 11:00am to 10:00pm">
            ORDER ONLINE
          </SectionHeading>
          <div className="grid lg:grid-cols-4 gap-5">
            <CategoryCard name="Salads" bgImage={category1} />
            <CategoryCard name="Soups" bgImage={category2} />
            <CategoryCard name="pizzas" bgImage={category3} />
            <CategoryCard name="desserts" bgImage={category4} />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url("${aboutBg}")`,
        }}
        className="container-area p-20"
      >
        <div className="text-center py-20 px-24 bg-white space-y-3">
          <h2 className="font-primary text-5xl font-semibold">Bistro Boss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </section>

      <MenuSection />

      <section className="container-area bg-black px-20 text-center">
        <p className="text-9xl text-white">Call Us: +88 0192345678910</p>
      </section>

      <section className="">
        <div className="container-area space-y-12">
          <SectionHeading subHeading="Should Try">
            CHEF RECOMMENDS
          </SectionHeading>
          <div className="flex gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
