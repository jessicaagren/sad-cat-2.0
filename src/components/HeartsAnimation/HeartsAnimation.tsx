import { useEffect, useRef } from 'react';
import './HeartsAnimations.scss';

const HeartsAnimation = () => {
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

  return <div ref={heartContainerRef} className='heart-container' />;
};

export default HeartsAnimation;
