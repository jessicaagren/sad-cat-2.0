function MusicPlayerContainer() {
  return (
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
  );
}

export default MusicPlayerContainer;
