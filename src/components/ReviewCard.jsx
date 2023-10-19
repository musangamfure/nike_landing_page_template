import PropTypes from 'prop-types';
import { star } from '../assets/icons';

function ReviewCard({
  imgURL, customerName, rating, feedback,
}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mat-3 flex justify-center items-center gap-2">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt="ratings"
        />
        <p className="text-xl font-montserrat text-slate-gray">
          (
          {rating}
          )
        </p>
      </div>
      <h3 className="mt-1 text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
}

ReviewCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
  // Add other props and their validations here
};

export default ReviewCard;
