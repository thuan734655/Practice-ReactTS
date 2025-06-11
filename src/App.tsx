import { Routes } from 'react-router-dom';
import { IconApp } from './assets/icon';
// import HeroSection from './features/heroSection';


function App() {
  return (
    <div>
      <IconApp name="CherryColor" hight={50} width={50} />
        <Routes>
          {/** route  */}
          {/* <Route path="/" element={<HeroSection />} /> */}

        </Routes>
    </div>
  );
}

export default App;