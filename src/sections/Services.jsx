import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex gap-9 justify-center flex-wrap padding-x padding-y">
      {services.map((service, index) => (
        <section
          key={index}
          className="flex-1 bg-white py-16 px-10 rounded-[20px] shadow-3xl"
        >
          <img
            src={service.image}
            alt=""
            className=" bg-coral-red p-3 rounded-full"
          />

          <h3 className="font-secondary text-3xl font-bold my-5">
            {service.title}
          </h3>
          <p className="text-xl font-primary text-slate-gray">
            {service.description}
          </p>
        </section>
      ))}
    </section>
  );
};

export default Services;
