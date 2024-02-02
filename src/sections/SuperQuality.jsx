import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 padding-x lg:flex-row lg:justify-between">
      <div className="left">
        <h2 className="font-secondary text-5xl font-bold lg:max-w-lg">
          We Provide You <span className=" text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>

        <p className="font-primary text-slate-gray text-lg mt-5 leading-7 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="font-primary text-slate-gray text-lg mt-4 leading-7 mb-8 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Button label={"Shop Now"} imgURL={arrowRight} />
      </div>

      <div className="right">
        <img src={shoe8} alt="our best shoe ever" />
      </div>
    </section>
  );
};

export default SuperQuality;
