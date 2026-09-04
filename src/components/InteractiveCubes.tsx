import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import type { RefObject } from 'react';
import * as THREE from 'three';

function Cube({
    position,
    pointer,
}: {
    position: [number, number, number];
    pointer: RefObject<THREE.Vector2>;
}) {
    const ref = useRef<THREE.Mesh>(null);
    const original = useMemo(() => new THREE.Vector3(...position), [position]);
    const pointerPosition = useMemo(() => new THREE.Vector3(), []);
    const direction = useMemo(() => new THREE.Vector3(), []);

    useFrame(() => {
        if (!ref.current) return;

        pointerPosition.set(pointer.current.x * 5.3, pointer.current.y * 3.7, 0);

        const distance = ref.current.position.distanceTo(pointerPosition);
        const force = Math.max(0, 2.15 - distance);

        if (force > 0) {
            direction.copy(ref.current.position).sub(pointerPosition).normalize();
            ref.current.position.add(direction.multiplyScalar(force * 0.065));
            ref.current.rotation.x += 0.045;
            ref.current.rotation.y += 0.055;
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

function CubeField({ pointer }: { pointer: RefObject<THREE.Vector2> }) {
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
                <Cube key={index} position={pos} pointer={pointer} />
            ))}
        </>
    );
}

export default function InteractiveCubes() {
    const pointer = useRef(new THREE.Vector2(10, 10));

    useEffect(() => {
        const updatePointer = (clientX: number, clientY: number) => {
            pointer.current.set(
                (clientX / window.innerWidth) * 2 - 1,
                -((clientY / window.innerHeight) * 2 - 1)
            );
        };

        const handlePointerMove = (event: PointerEvent) => {
            updatePointer(event.clientX, event.clientY);
        };

        const handleTouch = (event: TouchEvent) => {
            const touch = event.touches[0];
            if (touch) updatePointer(touch.clientX, touch.clientY);
        };

        const resetPointer = () => pointer.current.set(10, 10);

        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        window.addEventListener('pointerleave', resetPointer);
        window.addEventListener('touchstart', handleTouch, { passive: true });
        window.addEventListener('touchmove', handleTouch, { passive: true });
        window.addEventListener('touchend', resetPointer, { passive: true });
        window.addEventListener('touchcancel', resetPointer, { passive: true });

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerleave', resetPointer);
            window.removeEventListener('touchstart', handleTouch);
            window.removeEventListener('touchmove', handleTouch);
            window.removeEventListener('touchend', resetPointer);
            window.removeEventListener('touchcancel', resetPointer);
        };
    }, []);

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
                <CubeField pointer={pointer} />
            </Canvas>
        </div>
    );
}
