import * as THREE from 'three';


import FirstPanel from '../FirstPanel/FirstPanel';
import './App.css';
import SecondPanel from 'containers/SecoondPanel/SecondPanel';
import { useEffect, useState } from 'react';
import { usePhysicsBoxesStore } from 'store/PhysicsBoxes.store';
import Dragable from '3D Components/Controls/Dragable';
import BoxPhysics from '3D Components/ThreejsWithCannon/BoxPhysics';


import { projects } from 'tools/informationProjects';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import { useAppStore } from 'store/App.store';

function App() {

  const [loaded, setLoaded] = useState(false);
  const { setBoxes, boxesNumber } = usePhysicsBoxesStore();
  const { setIsOnProjects} = useAppStore(); 

  useEffect(() => {
    const newBoxes = new Array(boxesNumber).fill(0).map((_, i) => {
      let texture = new THREE.TextureLoader().load(projects[i].img);
      return <Dragable key={i} id={i}>
        <BoxPhysics id={i} texture={texture} />
      </Dragable>
    })

    setBoxes(newBoxes);

    setTimeout(() => {
      setIsOnProjects(false);
    }, 3000);

    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {!loaded && <>
        <LoadingScreen/>
      </>}
      <FirstPanel />
      <SecondPanel />
    </div>
  );
}

export default App;
