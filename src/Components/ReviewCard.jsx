import { reviews } from "../constants";
import { star } from "../assets/icons";

const ReviewCard = () => {
  return (
    <section className="flex flex-col justify-evenly items-center gap-16 mt-24 lg:flex-row">
      {reviews.map((reviews, index) => (
        <div key={index} className="flex flex-col justify-between items-center gap-5">
          <img
            src={reviews.image}
            alt=""
            className=" w-[120px] h-[120px] rounded-full"
          />
          <p className="max-w-96 info-text text-center">
            {reviews.review_text}
          </p>

          <div className="flex items-center">
            <img src={star} alt="" />
            <p className="info-text">({reviews.rating})</p>
          </div>
          <h3 className="text-3xl font-bold font-secondary">{reviews.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default ReviewCard;
