import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="padding-x padding-y bg-pale-blue">
      <h3 className=" text-5xl font-bold font-secondary text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text max-w-lg m-auto text-center mt-5">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <section className="flex flex-col justify-evenly items-center flex-wrap gap-16 mt-24 lg:flex-row">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            image={review.image}
            reviewText={review.review_text}
            rating={review.rating}
            name={review.name}
          />
        ))}
      </section>
    </section>
  );
};

export default CustomerReviews;
