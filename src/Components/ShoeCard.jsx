const ShoeCard = ({ imgURL, changeBigShoeImg, shoeImg }) => {
  const handleClick = () => {
    changeBigShoeImg(imgURL.bigShoe);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        shoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      }`}
    >
      <section
        className="bg-card bg-cover bg-center flex justify-center items-center w-24 h-24 md:w-40 md:h-40 rounded-xl hover:cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={imgURL.thumbnail}
          width={127}
          height={137}
          alt="shoe"
          className="max-sm:w-[90px] max-sm:h-[80px]"
        />
      </section>
    </div>
  );
};

export default ShoeCard;
