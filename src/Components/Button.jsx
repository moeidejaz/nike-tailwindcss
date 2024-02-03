const Button = ({ label, imgURL, bgc, textColor, borderColor }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border text-lg max-sm:py-3 max-sm:px-3 py-4 px-7 rounded-full leading-none ${
        bgc
          ? `${bgc} ${textColor} ${borderColor} `
          : "bg-coral-red text-white border-coral-red"
      }`}
    >
      {label}

      {imgURL && <img src={imgURL} />}
    </button>
  );
};

export default Button;
