import React, { useState, useCallback } from 'react';
import { VRCanvas, Hands, DefaultXRControllers, useXR, useController } from '@react-three/xr';

import Loading from '../../components3d/loadings/Loading';
import Stars from '../../components3d/stars/Stars';

function RunApp2() {
    return (
        <>
        <VRCanvas style={{backgroundColor:'black', position:'absolute', width:'100vw', height:'100vh'}} gl={{ antialias: true }}>
            
            <ambientLight />
            <Loading position={[0,0,-5]} />
            <Stars />

            <DefaultXRControllers />
            <Hands />

        </VRCanvas>
        </>
    );
}

function App2() {
    const [click, setClick] = useState(false);
    const handleClick = useCallback((e)=>{
        e.preventDefault();
        setClick(true);
    });
    return(
        click ? <RunApp2 /> :
                <div onPointerDown={handleClick} 
                    style={{position:'absolute', width:'100vw', height:'100vh', color:'#101010', backgroundColor:'#343a40', textAlign:'center'}}>
                        <h1>Click on Screen To Start</h1>
                        <br></br>
                        <h1>App2</h1>
                </div>
    );
}

export default App2;
