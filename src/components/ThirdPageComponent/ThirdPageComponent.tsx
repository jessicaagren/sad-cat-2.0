import './ThirdPageComponent.scss';

function ThirdPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='ThirdPageComponent'>
      <h1>Stephanie är KUNG! 👑</h1>
      <button className='yes-btn' onClick={onButtonClick}>
        Gå tillbaka till fjärde sidan
      </button>
    </div>
  );
}

export default ThirdPageComponent;
