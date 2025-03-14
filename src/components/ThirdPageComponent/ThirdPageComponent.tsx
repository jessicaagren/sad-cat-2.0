import './ThirdPageComponent.scss';
import Button from '../Button/Button';
import HeartsAnimation from '../HeartsAnimation/HeartsAnimation';
import CatImageComponent from '../CatImageComponent/CatImageComponent';

function ThirdPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='ThirdPageComponent'>
      <HeartsAnimation />
      <CatImageComponent mood='happy' />
      <div className='question-container'>
        <h1>Yippeeee!!!</h1>
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
