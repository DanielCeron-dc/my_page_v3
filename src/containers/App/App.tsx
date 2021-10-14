import FirstPanel from '../FirstPanel/FirstPanel';
import './App.css';
import SecondPanel from 'containers/SecoondPanel/SecondPanel';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);



  return (
    <div className="App">
      {loaded ? <>
        <FirstPanel />
        <SecondPanel />
      </> : <div style ={{height: '100vh', width: '100%', display: 'grid', placeItems: 'center'}}>
        <Loader/>
      </div>}
    </div>
  );
}

export default App;
