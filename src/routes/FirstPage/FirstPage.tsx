import Button from '../../components/Button/Button';
import './FirstPage.scss';

function FirstPageComponent({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className='FirstPage'>
      <h1>Stephanie!!!!!!! We miss you!!!!</h1>
      <Button
        title='Klicka här'
        className='yes-button'
        onButtonClick={onButtonClick}
      />
    </div>
  );
}

export default FirstPageComponent;
