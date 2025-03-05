import './FourthPageComponent.scss';

function FourthPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='FourthPageComponent'>
      <h1>Stephanie är en prutt! 💩</h1>
      <button className='yes-btn' onClick={onButtonClick}>
        Gå tillbaka till första sidan
      </button>
    </div>
  );
}

export default FourthPageComponent;
