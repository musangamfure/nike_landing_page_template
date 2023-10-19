import PropTypes from 'prop-types';

function Button({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullwidth,
}) {
  return (
    <button
      type="button"
      className={`flex justify-center items-center font-montserrat border gap-2 px-7 py-4 leading-none
    
     ${
       backgroundColor
         ? `${backgroundColor} ${textColor} ${borderColor}`
         : 'bg-coral-red text-white border-coral-red'
     } rounded-full ${fullwidth && 'w-full'}`}
    >
      {label}
      {' '}
      {iconURL && (
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
      )}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  fullwidth: PropTypes.bool.isRequired,
};

export default Button;
