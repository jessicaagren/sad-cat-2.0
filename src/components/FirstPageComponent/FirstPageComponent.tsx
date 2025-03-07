import Button from '../Button/Button';
import './FirstPageComponent.scss';

function FirstPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='FirstPageComponent'>
      <h1>Stephanie!!!!!!! We miss you!!!!</h1>
      <p>Fixa arrow</p>
      <p>Gör components av dem</p>
      <p>Byta namn på saker?</p>
      <p>Fixa knapplänkarna (arrows)</p>
      <Button
        title='Klicka här'
        className='yes-button'
        onButtonClick={onButtonClick}
      />
    </div>
  );
}

export default FirstPageComponent;
