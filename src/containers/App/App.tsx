import React, { useEffect, Suspense } from 'react';
import './App.css';

import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import useWindow from 'hooks/useWindowDimensions';
import Loader from 'components/Loader/Loader';

import { useAppStore } from 'store/App.store';
import { usePhysicsBoxesStore } from 'store/PhysicsBoxes.store';

const Tablet = React.lazy(() => import('../tablet/Tablet'));
const Mobile = React.lazy(() => import('../mobile/Mobile'));
const Desktop = React.lazy(() => import('../Desktop/Desktop'));

function App() {
  
  const { isTablet, isMobile, isDesktop } = useWindow();
  const {  fetchProjects } = useAppStore();
  const { initializePositions } = usePhysicsBoxesStore(); 

  const initializeApp = async() => {
    fetchProjects();
    initializePositions();
  }

  useEffect(() => {
    initializeApp(); 
  }, []); 


  return (
    <div className="App" id="App">
      <LoadingScreen />
      <Suspense fallback={<Loader />}>
        {isDesktop && <Desktop/>}
        {isTablet && <Tablet />}
        {isMobile && <Mobile />}
      </Suspense>
    </div>
  );
}

export default App;
