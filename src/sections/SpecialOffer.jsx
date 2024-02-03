import Button from "../Components/Button";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex flex-col-reverse items-center xl:gap-10 lg:flex-row padding-x padding-y">
      <img
        src={offer}
        alt="offer image"
        width={773}
        height={687}
        className="lg:w-[450px] xl:w-[650px]"
      />

      <div>
        <h2 className="font-secondary text-5xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>

        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-4 mt-11 max-lg:mb-6">
          <Button label="View details" />
          <Button
            label="Learn more"
            bgc="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
