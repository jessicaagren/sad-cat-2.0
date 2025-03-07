import { useEffect, useRef } from 'react';
import './ThirdPageComponent.scss';
import Button from '../Button/Button';
import HeartsAnimation from '../HeartsAnimation/HeartsAnimation';

function ThirdPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  const heartContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='ThirdPageComponent'>
      <HeartsAnimation />
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
            <Button
              title='Klicka här'
              className='yes-button'
              onButtonClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPageComponent;
