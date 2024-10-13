'use client'
import { Canvas, useThree } from '@react-three/fiber';
import Model from './3d-model';
import { Suspense } from 'react';
import { CameraControls, ScrollControls } from '@react-three/drei';
const Scene = () => {
    return (
        <Canvas dpr={[1, 1.5]} className='relative h-lvh' >
            
            <ambientLight  color={0x404040}  intensity={200} />
            <Suspense fallback={null}>
                <CameraControls />
                    <Model />
            </Suspense>
        </Canvas>
    )
}
export default Scene