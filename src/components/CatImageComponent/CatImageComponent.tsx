type CatImageProps = {
  mood: 'happy' | 'sad';
};

function CatImageComponent({ mood }: CatImageProps) {
  const catImageSrc =
    mood === 'happy' ? '/media/happy-cat.png' : '/media/sad-cat.png';
  const catImageAlt = mood === 'happy' ? 'Happy Cat Image' : 'Sad Cat Image';

  return (
    <img
      src={catImageSrc}
      className='CatImageComponent'
      alt={catImageAlt}
      height='300px'
      width='300px'
    />
  );
}

export default CatImageComponent;
