import React, { useEffect, Suspense, useLayoutEffect } from 'react';
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
  const { fetchProjects, setIsOnProjects, changeTheme } = useAppStore();
  const { initializePositions } = usePhysicsBoxesStore();

  useLayoutEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

  useEffect(() => {
    fetchProjects();
    initializePositions();
    const theme = localStorage.getItem('theme');
    changeTheme(theme ?? 'green');
  }, []);

  useEffect(() => {
    setIsOnProjects(false);
  }, [isTablet, isMobile, isDesktop]);


  return (
    <div className="App" id="App">
      <LoadingScreen />
      <Suspense fallback={<Loader />}>
        {isDesktop && <Desktop />}
        {isTablet && <Tablet />}
        {isMobile && <Mobile />}
      </Suspense>
    </div>
  );
}

export default App;
