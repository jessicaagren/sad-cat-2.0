import FlirtyEmoji from '../../components/FlirtyEmoji/FlirtyEmoji';
import MusicPlayerContainer from '../../components/MusicPlayerContainer/MusicPlayerContainer';
import PixelHeart from '../../components/PixelHeart/PixelHeart';
import './FourthPage.scss';

function FourthPage({}: { onButtonClick: () => void }) {
  return (
    <div className='FourthPage'>
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

export default FourthPage;
