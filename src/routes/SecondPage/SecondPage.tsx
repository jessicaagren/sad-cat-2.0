import { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import CatImageComponent from '../../components/CatImageComponent/CatImageComponent';
import './SecondPage.scss';

function SecondPage({ onButtonClick }: { onButtonClick: () => void }) {
  const noButtonRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const triggerExplosion = () => {
    if (noButtonRef.current) {
      noButtonRef.current.classList.add('explode');

      setTimeout(() => {
        noButtonRef.current?.remove();
      }, 500);
    }
  };

  const [moveCount, setMoveCount] = useState(0);

  const moveNoButton = () => {
    if (moveCount >= 5) return;
    const radius = 150;
    const angle = Math.random() * Math.PI * 2;

    const newX = radius * Math.cos(angle);
    const newY = radius * Math.sin(angle);

    setOffset({ x: newX, y: newY });
    setMoveCount((prev) => prev + 1);
  };

  return (
    <div className='SecondPage'>
      <CatImageComponent mood='sad' />

      <div className='question-container'>
        <h1>Saknar du oss också?</h1>
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
              onMouseEnter={moveNoButton}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
