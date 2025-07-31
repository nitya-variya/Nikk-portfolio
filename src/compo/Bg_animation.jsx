import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

// ✅ Custom Shader Material — with bluish radial center
const NoiseMaterial = shaderMaterial(
  {
    uResolution: new THREE.Vector2(),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    precision highp float;
    varying vec2 vUv;
    uniform vec2 uResolution;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) +
             (c - a) * u.y * (1.0 - u.x) +
             (d - b) * u.x * u.y;
    }

    void main() {
      vec2 st = vUv * 6.0;
      float n = noise(st);

      vec3 orange = vec3(1.0, 0.55, 0.0);     // #FF8C00
      vec3 purple = vec3(0.4, 0.3, 0.82);     // #4830D2
      vec3 bluish = vec3(0.3, 0.4, 0.9);      // bluish purple

      vec3 blendColor = mix(purple, orange, n * 0.55 + 0.225);
      float centerFalloff = smoothstep(0.15, 0.0, abs(n - 0.5));
      blendColor = mix(blendColor, bluish, centerFalloff * 0.5);

      vec3 bg = vec3(0.03, 0.01, 0.08);
      vec3 finalColor = mix(bg, blendColor, smoothstep(0.3, 0.8, n));

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ NoiseMaterial });

function AnimatedBackground() {
  const materialRef = useRef();
  const meshRef = useRef();
  const { size, gl, scene, camera } = useThree();

  // Run only once after mount
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uResolution.set(size.width, size.height);
    }

    if (meshRef.current) {
      const aspect = size.width / size.height;
      meshRef.current.scale.set(2 * aspect, 2, 1);
    }

    gl.render(scene, camera); // manually render once

  }, [size, gl, scene, camera]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} />
      <noiseMaterial ref={materialRef} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function Bg_animation() {
  return (
    <div className="bottom_bg">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={1}>
        <AnimatedBackground />
      </Canvas>
      <div className="Wtrn_bg_border"></div>
    </div>
  );
}
