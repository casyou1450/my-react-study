const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        className || "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;