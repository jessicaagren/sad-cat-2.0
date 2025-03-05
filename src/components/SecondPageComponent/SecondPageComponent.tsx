import './SecondPageComponent.scss';

function SecondPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  const triggerExplosion = () => {
    const noButton = document.getElementById('noBtn') as HTMLButtonElement;

    if (noButton) {
      noButton.classList.add('explode');

      setTimeout(() => {
        noButton.remove();
      }, 500);
    }
  };

  return (
    <div className='SecondPageComponent'>
      <span id='arrow-span'>
        <a href='/index.html'>
          <img
            src='/media/pixel-arrow-left.png'
            className='arrow-left'
            height='100px'
            width='100px'
            alt='Back Arrow'
          />
        </a>
      </span>
      <img
        src='/media/sad-cat.png'
        className='cat-img'
        alt='Cat Image'
        height='300px'
        width='300px'
      />

      <div className='question-container'>
        <h1 id='heading-text'>Saknar du oss också?</h1>
        <div className='buttons-container'>
          <div className='button-wrapper'>
            <button id='yesBtn' className='yes-btn' onClick={onButtonClick}>
              Ja
            </button>
          </div>
          <div className='button-wrapper'>
            <button id='noBtn' className='no-btn' onClick={triggerExplosion}>
              Nej
            </button>
          </div>
        </div>
      </div>
      <div id='heartContainer'></div>
    </div>
  );
}

export default SecondPageComponent;
