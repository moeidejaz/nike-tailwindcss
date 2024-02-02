import { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { stats, shoes } from "../constants";

const Hero = () => {
  const [shoeImage, setShoeImage] = useState(bigShoe1);
  return (
    <section className="flex flex-col xl:flex-row" id="home">
      <div className="xl:w-2/5 lg:mt-20 padding-x">
        <p className="mt-4 text-coral-red text-xl">Our Summer Collection</p>
        <h1 className="mt-10 font-secondary text-8xl max-sm:text-[68px] max-sm:leading-[80px] font-bold lg:leading-[120px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike </span>Shoes
        </h1>

        <p className="sm:max-w-sm mt-6 mb-8 font-primary text-lg leading-8 text-slate-gray">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop Now"} imgUrl={arrowRight} />

        {/* stats */}
        <section className="sm:mt-6 mb-6 flex justify-start items-start flex-wrap mt-20 gap-16">
          {stats.map((item, index) => (
            <div key={index}>
              <p className=" font-secondary font-bold text-5xl">{item.value}</p>
              <p className=" font-primary text-slate-gray leading-10">
                {item.label}
              </p>
            </div>
          ))}
        </section>
      </div>

      {/* shoe image */}
      <div className="relative flex-1 xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center flex justify-center items-center xl:mr-14 mb-20">
        <img src={shoeImage} alt="shoe collection" width={610} height={502} />
        {/* shoe thumbnails */}
        <div className="flex gap-2 lg:gap-4 absolute -bottom-10 lg:-bottom-20">
          {shoes.map((item, index) => (
            <ShoeCard
              key={index}
              imgURL={item}
              shoeImg={shoeImage}
              changeBigShoeImg={setShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
