import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function Loading({...props}) {
    
    const mesh = useRef(null);

    useFrame(() => {
        if( mesh ) {
            mesh.current.rotation.y += 0.05;
        }
    })

    return (
        <group {...props}>
            <mesh ref={mesh}>
                <boxBufferGeometry attach='geometry' args={[1,1,1]} />
                <meshStandardMaterial attach='material' color='hotpink' />
            </mesh>
            <Text position={[0,-2,0]} fontSize={ 1.0 }>
                Loading...
            </Text>
        </group>
    );
}