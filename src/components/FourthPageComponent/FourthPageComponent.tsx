import MusicPlayerContainer from '../MusicPlayerContainer/MusicPlayerContainer';
import './FourthPageComponent.scss';

function FourthPageComponent({}: { onButtonClick: () => void }) {
  return (
    <div className='FourthPageComponent'>
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
        <MusicPlayerContainer />
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
