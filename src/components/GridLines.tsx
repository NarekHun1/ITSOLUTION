import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function WavyGrid() {
    const groupRef = useRef<THREE.Group>(null);

    const lines = useMemo(() => {
        const items: THREE.BufferGeometry[] = [];
        const size = 34;
        const count = 34;
        const segments = 120;

        for (let i = 0; i <= count; i++) {
            const offset = -size / 2 + (i / count) * size;

            const horizontalPoints: THREE.Vector3[] = [];
            const verticalPoints: THREE.Vector3[] = [];

            for (let j = 0; j <= segments; j++) {
                const t = -size / 2 + (j / segments) * size;

                const wave1 = Math.sin(t * 0.45 + i * 0.35) * 0.75;
                const wave2 = Math.cos(t * 0.22 + i * 0.55) * 0.45;

                horizontalPoints.push(
                    new THREE.Vector3(t, offset + wave1 + wave2, 0)
                );

                verticalPoints.push(
                    new THREE.Vector3(offset + wave1 + wave2, t, 0)
                );
            }

            items.push(new THREE.BufferGeometry().setFromPoints(horizontalPoints));
            items.push(new THREE.BufferGeometry().setFromPoints(verticalPoints));
        }

        return items;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        groupRef.current.rotation.x = -0.42 + state.pointer.y * 0.08;
        groupRef.current.rotation.y = state.pointer.x * 0.12;
        groupRef.current.position.x = state.pointer.x * 0.8;
        groupRef.current.position.y = state.pointer.y * 0.4;
    });

    return (
        <group ref={groupRef} position={[3, 0, -4]}>
            {lines.map((geometry, index) => (
                <primitive key={index} object={new THREE.Line(
                    geometry,
                    new THREE.LineBasicMaterial({
                        color: '#9cff00',
                        transparent: true,
                        opacity: 0.28,
                    })
                )} />
            ))}
        </group>
    );
}

export default function GridLines() {
    return (
        <div className="gridBg">
            <Canvas camera={{ position: [0, 0, 18], fov: 55 }}>
                <WavyGrid />
            </Canvas>
        </div>
    );
}