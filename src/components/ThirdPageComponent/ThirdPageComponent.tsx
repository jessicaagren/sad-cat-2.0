import { useEffect, useRef } from 'react';
import './ThirdPageComponent.scss';

function ThirdPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  const heartContainerRef = useRef<HTMLDivElement | null>(null);

  const createHearts = () => {
    if (!heartContainerRef.current) return;

    for (let i = 0; i < 200; i++) {
      const heart = document.createElement('img');
      heart.classList.add('heart');
      heart.src = '/media/pixel-heart.png';
      heart.alt = 'Heart';

      const randomX = Math.random() * window.innerWidth;
      const randomSize = Math.random() * 30 + 20;
      const duration = Math.random() * 3 + 2;
      const startY = Math.random() * -100 - 50;

      heart.style.left = `${randomX}px`;
      heart.style.width = `${randomSize}px`;
      heart.style.height = `${randomSize}px`;
      heart.style.animationDuration = `${duration}s`;
      heart.style.top = `${startY}px`;
      heart.style.position = 'absolute';

      heart.style.animationName =
        Math.random() > 0.5 ? 'fallLeft' : 'fallRight';

      heartContainerRef.current.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  };

  useEffect(() => {
    createHearts();
  }, []);

  return (
    <div className='ThirdPageComponent'>
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
      <div ref={heartContainerRef} id='heartContainer'></div>
      <img
        src='/media/happy-cat.png'
        className='cat-img'
        alt='Cat Image'
        height='300px'
        width='300px'
      />
      <div className='question-container'>
        <h1 id='heading-text'>Yippeeee!!!</h1>
        <div className='buttons-container'>
          <div className='button-wrapper'>
            <button id='yesBtn' className='yes-btn' onClick={onButtonClick}>
              Klicka här
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPageComponent;
