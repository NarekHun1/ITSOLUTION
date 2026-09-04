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
                color="#00d878"
                roughness={0.28}
                metalness={0.75}
            />
        </RoundedBox>
    );
}

function CubeField() {
    const cubes = useMemo(() => {
        const positions: [number, number, number][] = [];
        const cubeCount = 38;
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));

        for (let index = 0; index < cubeCount; index += 1) {
            const radius = Math.sqrt((index + 0.5) / cubeCount);
            const angle = index * goldenAngle;
            const x = Math.cos(angle) * 4.55 * radius;
            const y = Math.sin(angle) * 3.25 * radius;
            const depth = (Math.sin(index * 1.73) + 1) * 0.34;

            positions.push([x, y, depth]);
        }

        return positions;
    }, []);

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
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
                onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={1.2} />
                <pointLight position={[4, 5, 7]} intensity={4} />
                <pointLight position={[-5, -3, 4]} intensity={2} color="#00d878" />
                <CubeField />
            </Canvas>
        </div>
    );
}
