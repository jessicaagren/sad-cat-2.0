import { useRef } from 'react';
import Button from '../Button/Button';
import CatImageComponent from '../CatImageComponent/CatImageComponent';
import './SecondPageComponent.scss';

function SecondPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  const noButtonRef = useRef<HTMLButtonElement | null>(null);

  const triggerExplosion = () => {
    if (noButtonRef.current) {
      noButtonRef.current.classList.add('explode');

      setTimeout(() => {
        noButtonRef.current?.remove();
      }, 500);
    }
  };

  const moveNoButton = () => {
    if (noButtonRef.current) {
      const button = noButtonRef.current;
      const radius = 100; // Avstånd som knappen ska hoppa
      const randomAngle = Math.random() * 2 * Math.PI; // Slumptal för vinkel
      const randomX = radius * Math.cos(randomAngle); // X-koordinat
      const randomY = radius * Math.sin(randomAngle); // Y-koordinat

      // Hämta knappen och dess aktuella position
      const rect = button.getBoundingClientRect();

      // Beräkna nya positioner, säkerställ att knappen stannar inom fönstrets gränser
      const newLeft = Math.min(
        Math.max(rect.left + randomX, 0),
        window.innerWidth - rect.width
      );
      const newTop = Math.min(
        Math.max(rect.top + randomY, 0),
        window.innerHeight - rect.height
      );

      // Flytta knappen till den nya positionen
      button.style.transform = `translate(${newLeft}px, ${newTop}px)`;
    }
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered');
    moveNoButton();
  };

  return (
    <div className='SecondPageComponent'>
      <CatImageComponent mood='sad' />

      <div className='question-container'>
        <h1 id='heading-text'>Saknar du oss också?</h1>
        <div className='buttons-container'>
          <div className='button-wrapper'>
            <Button
              title='Ja'
              className='yes-button'
              onButtonClick={onButtonClick}
            />
          </div>
          <div className='button-wrapper'>
            <Button
              title='Nej'
              className='no-button'
              onButtonClick={triggerExplosion}
              ref={noButtonRef}
              onMouseEnter={handleMouseEnter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPageComponent;
