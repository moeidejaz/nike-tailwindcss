const Button = ({ label, imgUrl }) => {
  return (
    <button className="flex items-center gap-3 bg-coral-red text-lg text-white py-4 px-7 rounded-full leading-none w-50">
      {label}

      <img src={imgUrl} />
    </button>
  );
};

export default Button;
