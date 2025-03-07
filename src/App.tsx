import './App.scss';

import { useState } from 'react';
import Arrow from './components/Arrow/Arrow';
import FirstPageComponent from './components/FirstPageComponent/FirstPageComponent';
import SecondPageComponent from './components/SecondPageComponent/SecondPageComponent';
import ThirdPageComponent from './components/ThirdPageComponent/ThirdPageComponent';
import FourthPageComponent from './components/FourthPageComponent/FourthPageComponent';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <span id='arrow-span'>
        {currentPage > 1 && (
          <Arrow onButtonClick={() => setCurrentPage(currentPage - 1)} />
        )}
      </span>

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
        <FourthPageComponent onButtonClick={() => setCurrentPage(3)} />
      )}
    </div>
  );
}

export default App;
