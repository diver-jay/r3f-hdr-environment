import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Environment files="underwater.hdr" background />

      <OrbitControls />
    </Canvas>
  );
}
