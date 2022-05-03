import './App.css';
import SurfaceContainer from './components/SurfaceContainer';
import FirstWhiteContainer from './components/FirstWhiteContainer';
import GrayContainer from './components/GrayContainer';
import SecondWhiteContainer from './components/SecondWhiteContainer';
import learnbanner from "./assets/learnbanner.png"


function App() {
  return (
    <div className="bg-back w-screen h-full font-poppins">
      <SurfaceContainer/>
      <FirstWhiteContainer/>
      <GrayContainer/>
      <div className="container mx-auto">
        <img
          src={learnbanner}
          alt="learnbanner"
        />
      </div>
      <SecondWhiteContainer/>
    </div>
  );
}

export default App;
