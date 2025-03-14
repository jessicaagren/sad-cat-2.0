import './Arrow.scss';

type ArrowProps = {
  onButtonClick: () => void;
};

function Arrow({ onButtonClick }: ArrowProps) {
  return (
    <button onClick={onButtonClick} className='Arrow'>
      <img src='/media/pixel-arrow-left.png' alt='Back Arrow' />
    </button>
  );
}

export default Arrow;
