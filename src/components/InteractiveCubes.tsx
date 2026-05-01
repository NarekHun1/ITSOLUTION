import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Cube({ position }: { position: [number, number, number] }) {
    const ref = useRef<THREE.Mesh>(null);
    const original = useMemo(() => new THREE.Vector3(...position), [position]);

    useFrame((state) => {
        if (!ref.current) return;

        const pointer = new THREE.Vector3(
            state.pointer.x * 7,
            state.pointer.y * 4,
            0
        );

        const distance = ref.current.position.distanceTo(pointer);
        const force = Math.max(0, 1.8 - distance);

        if (force > 0) {
            const direction = ref.current.position.clone().sub(pointer).normalize();
            ref.current.position.add(direction.multiplyScalar(force * 0.05));
            ref.current.rotation.x += 0.04;
            ref.current.rotation.y += 0.05;
        } else {
            ref.current.position.lerp(original, 0.06);
            ref.current.rotation.x += 0.006;
            ref.current.rotation.y += 0.008;
        }
    });

    return (
        <RoundedBox ref={ref} args={[0.55, 0.55, 0.55]} radius={0.08} position={position}>
            <meshStandardMaterial
                color="#7c3aed"
                roughness={0.28}
                metalness={0.75}
            />
        </RoundedBox>
    );
}

function CubeField() {
    const cubes: [number, number, number][] = [];

    for (let x = -4; x <= 4; x += 1.2) {
        for (let y = -3; y <= 3; y += 1.2) {
            cubes.push([x, y, Math.random() * 0.6]);
        }
    }

    return (
        <>
            {cubes.map((pos, index) => (
                <Cube key={index} position={pos} />
            ))}
        </>
    );
}

export default function InteractiveCubes() {
    return (
        <div className="cubeCanvas">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={1.2} />
                <pointLight position={[4, 5, 7]} intensity={4} />
                <pointLight position={[-5, -3, 4]} intensity={2} color="#38bdf8" />
                <CubeField />
            </Canvas>
        </div>
    );
}