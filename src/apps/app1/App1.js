import React, { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';

import Loading from '../../components3d/loadings/Loading';
import Stars from '../../components3d/stars/Stars';

function ScenePrincipal(){
  return (
    <>
      <ambientLight />
      <Loading position={[0,0,-5]} />
      <Stars />
    </>
  );
}

function RunDive(){
  return null;
}

function RunApp1() {
  
  return (
      <>
      <Canvas style={{backgroundColor:'black', position:'absolute', width:'100vw', height:'100vh'}} gl={{ antialias: true }}>
        <ScenePrincipal />
        <RunDive />
      </Canvas>
      </>
  );
}

function App1() {
  const [click, setClick] = useState(false);
  const handleClick = useCallback((e)=>{
      e.preventDefault();
      setClick(true);
  });
  return(
      click ? <RunApp1 /> :
              <div onPointerDown={handleClick} 
                  style={{position:'absolute', width:'100vw', height:'100vh', color:'#101010', backgroundColor:'#343a40', textAlign:'center'}}>
                      <h1>Click on Screen To Start</h1>
                      <br></br>
                      <h1>App1</h1>
              </div>
  );
}

export default App1;
