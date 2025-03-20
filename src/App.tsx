import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Arrow from './components/Arrow/Arrow';

import FirstPage from './routes/FirstPage/FirstPage';
import SecondPage from './routes/SecondPage/SecondPage';
import ThirdPage from './routes/ThirdPage/ThirdPage';
import FourthPage from './routes/FourthPage/FourthPage';

const NavigationArrow = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const goBack = () => {
    switch (currentPath) {
      case '/page2':
        navigate('/');
        break;
      case '/page3':
        navigate('/page2');
        break;
      case '/page4':
        navigate('/page3');
        break;
      default:
        break;
    }
  };

  return (
    <span id='arrow-span'>
      {currentPath !== '/' && <Arrow onButtonClick={goBack} />}
    </span>
  );
};

function App() {
  return (
    <Router>
      <NavigationArrow />
      <Routes>
        <Route
          path='/'
          element={
            <FirstPage
              onButtonClick={() => (window.location.href = '/page2')}
            />
          }
        />
        <Route
          path='/page2'
          element={
            <SecondPage
              onButtonClick={() => (window.location.href = '/page3')}
            />
          }
        />
        <Route
          path='/page3'
          element={
            <ThirdPage
              onButtonClick={() => (window.location.href = '/page4')}
            />
          }
        />
        <Route
          path='/page4'
          element={
            <FourthPage
              onButtonClick={() => (window.location.href = '/page3')}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
