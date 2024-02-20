import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import Typewriter from 'typewriter-effect';


function MeshComponent() {
  const fileUrl = "/pc/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <group position={[-0.8, -0.7, -1.9]}> {/* Adjusted position to move model to the bottom */}
      <mesh ref={mesh} scale={[2, 1.2, 1]}>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

export function PC() {
    return (
      <div className="relative h-screen">
        <Canvas className="h-screen w-screen">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <MeshComponent />
        </Canvas>
        <div className="overlay absolute inset-0 flex justify-center items-center">
        <div className="overlay-content bg-black bg-opacity-30 text-white p-4 rounded-lg">
          <h1 className ="text-6xl text-center">ISTECode</h1>
          <h2 className="text-3xl text-center">Code Create Inspire !</h2>
        </div>
      </div>
      </div>
    );
}
