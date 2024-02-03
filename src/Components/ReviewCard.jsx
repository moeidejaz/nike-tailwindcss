import { star } from "../assets/icons";
import { customer1 } from "../assets/images";

const ReviewCard = ({ image, reviewText, rating, name }) => {
  return (
    <section className="flex flex-col justify-between items-center gap-5">
      <img
        src={image}
        alt={name}
        className=" w-[120px] h-[120px] rounded-full"
      />
      <p className="max-w-96 info-text text-center">{reviewText}</p>

      <div className="flex items-center gap-2">
        <img src={star} width={24} height={24} alt="star" />
        <p className="info-text">({rating})</p>
      </div>
      <h3 className="text-3xl font-bold font-secondary">{name}</h3>
    </section>
  );
};

export default ReviewCard;
