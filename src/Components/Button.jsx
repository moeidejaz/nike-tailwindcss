const Button = ({ label, imgURL }) => {
  return (
    <button className="flex items-center gap-3 bg-coral-red text-lg text-white py-4 px-7 rounded-full leading-none w-50">
      {label}

      <img src={imgURL} />
    </button>
  );
};

export default Button;
