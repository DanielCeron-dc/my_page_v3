import React, { useEffect, useState, Suspense } from 'react';
import './App.css';

import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import { useAppStore } from 'store/App.store';
import useWindow from 'hooks/useWindowDimensions';


const Tablet = React.lazy(() => import('../tablet/Tablet'));
const Mobile = React.lazy(() => import('../mobile/Mobile'));
const Desktop = React.lazy(() => import('../Desktop/Desktop'));

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
  }, [setIsOnProjects]);

  return (
    <div className="App" id="App" onScroll={e => {
      e.preventDefault();
      const y = e.currentTarget.scrollHeight;
      console.log(e.currentTarget);
      console.log(y);

    }}>
      {!loaded && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        {isDesktop && <Desktop/>}
        {isTablet && <Tablet />}
        {isMobile && <Mobile />}
      </Suspense>
    </div>
  );
}

export default App;
