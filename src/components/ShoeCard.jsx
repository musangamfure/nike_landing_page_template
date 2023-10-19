import PropTypes from 'prop-types';

function ShoeCard({ imgURL, changeBigShoeImage, BigShoeImg }) {
  const handleClick = () => {
    if (BigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <button
      type="button"
      className={`border-2 rounded-xl ${
        BigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm: flex-1`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </button>
  );
}

ShoeCard.propTypes = {
  imgURL: PropTypes.shape({
    bigShoe: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
  BigShoeImg: PropTypes.string.isRequired,
};

export default ShoeCard;
