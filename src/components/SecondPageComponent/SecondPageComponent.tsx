import Button from '../Button/Button';
import CatImageComponent from '../CatImageComponent/CatImageComponent';
import './SecondPageComponent.scss';

function SecondPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  const triggerExplosion = () => {
    const noButton = document.getElementById('noBtn') as HTMLButtonElement;

    if (noButton) {
      noButton.classList.add('explode');

      setTimeout(() => {
        noButton.remove();
      }, 500);
    }
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
            />
          </div>
        </div>
      </div>
      <div id='heartContainer'></div>
    </div>
  );
}

export default SecondPageComponent;
