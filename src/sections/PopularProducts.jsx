import ProductCard from "../Components/ProductCard";

const PopularProducts = () => {
  return (
    <section className="padding-x padding-y" id="products">
      <h2 className="font-secondary text-5xl font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="font-primary text-slate-gray lg:w-[32rem] mt-6 mb-12">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <ProductCard />
    </section>
  );
};

export default PopularProducts;
