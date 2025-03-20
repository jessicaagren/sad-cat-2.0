import { JSX } from 'react';
import Button from '../../components/Button/Button';
import './FirstPage.scss';

function FirstPage({
  onButtonClick,
}: {
  onButtonClick: () => void;
}): JSX.Element {
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

export default FirstPage;
