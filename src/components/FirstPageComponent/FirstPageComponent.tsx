import './FirstPageComponent.scss';

function FirstPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='FirstPageComponent'>
      <h1>Stephanie!!!!!!! We miss you!!!!</h1>
      <button id='yesBtn' className='yes-btn' onClick={onButtonClick}>
        Klicka här
      </button>
    </div>
  );
}

export default FirstPageComponent;
