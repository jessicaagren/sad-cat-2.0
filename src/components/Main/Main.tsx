import FirstPageComponent from '../FirstPageComponent/FirstPageComponent';
import FourthPageComponent from '../FourthPageComponent/FourthPageComponent';
import SecondPageComponent from '../SecondPageComponent/SecondPageComponent';
import ThirdPageComponent from '../ThirdPageComponent/ThirdPageComponent';
import './Main.scss';
import { useState } from 'react';

function Main() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      {currentPage === 1 && (
        <FirstPageComponent onButtonClick={() => setCurrentPage(2)} />
      )}
      {currentPage === 2 && (
        <SecondPageComponent onButtonClick={() => setCurrentPage(3)} />
      )}
      {currentPage === 3 && (
        <ThirdPageComponent onButtonClick={() => setCurrentPage(4)} />
      )}
      {currentPage === 4 && (
        <FourthPageComponent onButtonClick={() => setCurrentPage(1)} />
      )}
    </div>
  );
}

export default Main;
