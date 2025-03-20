import './ThirdPage.scss';
import Button from '../../components/Button/Button';
import HeartsAnimation from '../../components/HeartsAnimation/HeartsAnimation';
import CatImageComponent from '../../components/CatImageComponent/CatImageComponent';

function ThirdPage({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='ThirdPage'>
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

export default ThirdPage;
