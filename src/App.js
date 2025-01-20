import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Main from './pages/Main';
import SwiperComponent from './components/Swiper';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //     <Route path='*' element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <div className='App'>
      {/* <Main /> */}
      <SwiperComponent />
    </div>

  );
}

export default App;
