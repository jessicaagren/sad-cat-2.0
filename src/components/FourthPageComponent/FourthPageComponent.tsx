import FlirtyEmoji from '../FlirtyEmoji/FlirtyEmoji';
import MusicPlayerContainer from '../MusicPlayerContainer/MusicPlayerContainer';
import PixelHeart from '../PixelHeart/PixelHeart';
import './FourthPageComponent.scss';

function FourthPageComponent({}: { onButtonClick: () => void }) {
  return (
    <div className='FourthPageComponent'>
      <div className='container'>
        <h1>Hoppas du mår bra!</h1>
        <span id='text-emoji-wrapper'>
          <p>Lyssna på den här och tänk på oss</p>
          <FlirtyEmoji />
        </span>
        <MusicPlayerContainer />
        <h2>Siri & Jessica</h2>
        <PixelHeart />
      </div>
    </div>
  );
}

export default FourthPageComponent;
