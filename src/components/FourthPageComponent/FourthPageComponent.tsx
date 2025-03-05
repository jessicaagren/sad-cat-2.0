import './FourthPageComponent.scss';

function FourthPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='FourthPageComponent'>
      <span id='arrow-span'>
        <button onClick={onButtonClick}>
          <img
            src='/media/pixel-arrow-left.png'
            className='arrow-left'
            height='100px'
            width='100px'
            alt='Back Arrow'
          />
        </button>
      </span>
      <div className='container'>
        <h1>Hoppas du mår bra!</h1>
        <span id='text-emoji-wrapper'>
          <p>Lyssna på den här och tänk på oss</p>
          <img
            id='flirty-emoji'
            src='/media/flirty-emoji.png'
            alt='Flirty Emoji'
          />
        </span>
        <div className='player-container'>
          <iframe
            style={{ borderRadius: '12px' }}
            src='https://open.spotify.com/embed/playlist/5JevSFPTByDXDZzpVTmKYs?utm_source=generator'
            width='100%'
            height='352'
            frameBorder='0'
            allowFullScreen
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'></iframe>
        </div>
        <h2>Siri & Jessica</h2>
        <img
          src='/media/pixel-heart.png'
          height='40px'
          width='40px'
          alt='Heart Icon'
        />
      </div>
    </div>
  );
}

export default FourthPageComponent;
