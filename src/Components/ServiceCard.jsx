const ServiceCard = ( {image , title , description}) => {
  return (
    <section className="flex-1 bg-white py-16 px-10 rounded-[20px] shadow-3xl">
      <img src={image} alt="" className=" bg-coral-red p-3 rounded-full" />

      <h3 className="font-secondary text-3xl font-bold my-5">{title}</h3>
      <p className="text-xl font-primary text-slate-gray">{description}</p>
    </section>
  );
};

export default ServiceCard;
