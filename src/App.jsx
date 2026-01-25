import { useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useCubeTexture } from "@react-three/drei";

function Scene() {
  const { scene } = useThree();
  const envMap = useCubeTexture(
    ["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"],
    { path: "/" }
  );

  useEffect(() => {
    scene.background = envMap;
  }, [scene, envMap]);

  return null;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}
