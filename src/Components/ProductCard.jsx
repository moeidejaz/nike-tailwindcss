import { star } from "../assets/icons";
import { products } from "../constants";

const ProductCard = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 md:flex-row xl:justify-between">
      {products.map((item, index) => (
        <section className="hover:cursor-pointer" key={index}>
          <img src={item.image} alt={item.title} className="mb-7" />

          <div className="flex items-center">
            <img src={star} alt="star" className=" mr-2" />
            <p className="font-primary text-xl text-slate-gray">
              ({item.rating})
            </p>
          </div>

          <h3 className="font-secondary text-2xl leading-normal font-semibold">
            {item.title}
          </h3>
          <p className="font-primary font-bold text-coral-red">{item.price}</p>
        </section>
      ))}
    </section>
  );
};

export default ProductCard;
