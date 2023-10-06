import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      position={[0, 0, -0.14]}
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      {/* <RandomizedLight
        amount={4}
        radius={10}
        ambient={0.25}
        position={[-5, 5, -9]}
      /> */}
    </AccumulativeShadows>
  );
};

export default Backdrop;
