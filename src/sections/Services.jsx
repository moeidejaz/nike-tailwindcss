import ServiceCard from "../Components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex gap-9 justify-center flex-wrap padding-x padding-y">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default Services;
