import { useGLTF } from '@react-three/drei'

import { useRef } from 'react'
import { Group } from 'three'


useGLTF.preload('/residential_family_house.glb')
const Model =  () => {
    const group = useRef<Group>(null);
    const { nodes, materials, animations, scene } = useGLTF('/residential_family_house.glb');

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default Model;