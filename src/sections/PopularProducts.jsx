import ProductCard from "../Components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="padding-x padding-y" id="products">
      <h2 className="font-secondary text-5xl font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="font-primary text-slate-gray w-full lg:w-[32rem] mt-6 mb-12">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <section className="flex flex-col justify-center items-center gap-4 md:flex-row xl:justify-between">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            rating={product.rating}
            title={product.title}
            price={product.price}
          />
        ))}
      </section>
    </section>
  );
};

export default PopularProducts;
