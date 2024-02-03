import { star } from "../assets/icons";

const ProductCard = ({ image, rating, title, price }) => {
  return (
    <section className="hover:cursor-pointer">
      <img src={image} alt={title} className="mb-7" />

      <div className="flex items-center">
        <img src={star} alt="star" className=" mr-2" />
        <p className="font-primary text-xl text-slate-gray">({rating})</p>
      </div>

      <h3 className="font-secondary text-2xl leading-normal font-semibold">
        {title}
      </h3>
      <p className="font-primary font-bold text-coral-red">{price}</p>
    </section>
  );
};

export default ProductCard;
