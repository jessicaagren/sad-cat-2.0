import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Arrow from './components/Arrow/Arrow';
import FirstPageComponent from './routes/FirstPage/FirstPage';
import SecondPageComponent from './routes/SecondPage/SecondPage';
import ThirdPageComponent from './routes/ThirdPage/ThirdPage';
import FourthPageComponent from './routes/FourthPage/FourthPage';

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
            <FirstPageComponent
              onButtonClick={() => (window.location.href = '/page2')}
            />
          }
        />
        <Route
          path='/page2'
          element={
            <SecondPageComponent
              onButtonClick={() => (window.location.href = '/page3')}
            />
          }
        />
        <Route
          path='/page3'
          element={
            <ThirdPageComponent
              onButtonClick={() => (window.location.href = '/page4')}
            />
          }
        />
        <Route
          path='/page4'
          element={
            <FourthPageComponent
              onButtonClick={() => (window.location.href = '/page3')}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
