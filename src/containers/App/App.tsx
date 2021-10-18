import { useEffect, useState } from 'react';

import './App.css';

import FirstPanel from '../Desktop/FirstPanel';
import ThreeDPanel from 'containers/ThreeDPanel/ThreeDPanel';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import Tablet from '../tablet/Tablet';

import { useAppStore } from 'store/App.store';
import useWindow from 'hooks/useWindowDimensions';
import Mobile from 'containers/mobile/Mobile';

function App() {

  const [loaded, setLoaded] = useState(false);
  const { setIsOnProjects } = useAppStore();
  
  const { isTablet, isMobile, isDesktop} = useWindow(); 

  useEffect(() => { 
    setTimeout(() => {
      setIsOnProjects(true);
    }, 2000);

    setTimeout(() => {
      setIsOnProjects(false);
      setLoaded(true);
    }, 7000);
  }, []);

  return (
    <div className="App">
      {isDesktop && <>
        {!loaded && <LoadingScreen />}
        <FirstPanel />
        <ThreeDPanel />
      </>}
      {isTablet && <Tablet />}
      {isMobile && <Mobile />}
    </div>
  );
}

export default App;
