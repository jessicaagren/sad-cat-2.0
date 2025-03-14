import './MusicPlayerContainer.scss';

function MusicPlayerContainer() {
  return (
    <div className='player-container'>
      <iframe
        src='https://open.spotify.com/embed/playlist/5JevSFPTByDXDZzpVTmKYs?utm_source=generator'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'></iframe>
    </div>
  );
}

export default MusicPlayerContainer;
