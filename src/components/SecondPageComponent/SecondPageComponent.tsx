import './SecondPageComponent.scss';

function SecondPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='SecondPageComponent'>
      <span id='arrow-span'>
        <a href='/index.html'>
          <img
            src='/media/pixel-arrow-left.png'
            className='arrow-left'
            height='100px'
            width='100px'
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
            <button id='yesBtn' className='yes-btn'>
              Ja
            </button>
          </div>
          <div className='button-wrapper'>
            <button id='noBtn' className='no-btn'>
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
