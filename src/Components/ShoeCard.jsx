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
          alt="shoe"
          className="max-sm:w-[80px] max-sm:h-[66px]"
        />
      </section>
    </div>
  );
};

export default ShoeCard;
