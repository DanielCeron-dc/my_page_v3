import { useEffect, useState } from 'react';

import './App.css';

import FirstPanel from '../Desktop/FirstPanel';
import ThreeDPanel from 'containers/ThreeDPanel/ThreeDPanel';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';

import { useAppStore } from 'store/App.store';

function App() {

  const [loaded, setLoaded] = useState(false);
  const { setIsOnProjects} = useAppStore(); 

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
      {!loaded && <LoadingScreen/>}
      <FirstPanel />
      <ThreeDPanel />
    </div>
  );
}

export default App;
