import { Float, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import * as THREE from "three";
import { ScrollContent } from "./scroll-content/ScrollContent";

const vertex = /* glsl */ `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = /* glsl */ `
varying vec3 vNormal;
void main() {
  float glow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
 vec3 color = mix(vec3(0.7), vec3(1.0), glow);

  gl_FragColor = vec4(color, 1.0);
}
`;

function AnimatedMesh({
  cubeScreenPos,
}: {
  cubeScreenPos: RefObject<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const ref2 = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();
  const corners = useRef(
    new Array(8).fill(null).map(() => new THREE.Vector3()),
  );

  useFrame((state) => {
    const { camera, size } = state;

    const scrollValue = scroll.offset;

    ref.current.rotation.y = ref.current.rotation.x = scrollValue * Math.PI * 2;
    ref2.current.rotation.y = ref2.current.rotation.x =
      scrollValue * Math.PI * 1.5;

    ref.current.position.z = scrollValue * 2;
    ref2.current.position.z = scrollValue * 1.5;

    const mesh = ref.current;
    const geometry = mesh.geometry;
    geometry.computeBoundingBox();

    const bbox = geometry.boundingBox!;
    const matrixWorld = mesh.matrixWorld;

    const min = bbox.min;
    const max = bbox.max;
    const c = corners.current;

    // обновляем 8 вершин
    c[0].set(min.x, min.y, min.z).applyMatrix4(matrixWorld);
    c[1].set(min.x, min.y, max.z).applyMatrix4(matrixWorld);
    c[2].set(min.x, max.y, min.z).applyMatrix4(matrixWorld);
    c[3].set(min.x, max.y, max.z).applyMatrix4(matrixWorld);
    c[4].set(max.x, min.y, min.z).applyMatrix4(matrixWorld);
    c[5].set(max.x, min.y, max.z).applyMatrix4(matrixWorld);
    c[6].set(max.x, max.y, min.z).applyMatrix4(matrixWorld);
    c[7].set(max.x, max.y, max.z).applyMatrix4(matrixWorld);

    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;

    for (let i = 0; i < 8; i++) {
      const v = c[i].clone().project(camera);
      const sx = (v.x * 0.5 + 0.5) * size.width;
      const sy = (1 - (v.y * 0.5 + 0.5)) * size.height;

      if (sx < minX) minX = sx;
      if (sx > maxX) maxX = sx;
      if (sy < minY) minY = sy;
      if (sy > maxY) maxY = sy;
    }

    cubeScreenPos.current.x = (minX + maxX) / 2;
    cubeScreenPos.current.y = (minY + maxY) / 2;
    cubeScreenPos.current.width = maxX - minX;
    cubeScreenPos.current.height = maxY - minY;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={ref}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={ref2} scale={1.1}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          blending={THREE.AdditiveBlending}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  const cubeScreenPos = useRef({ x: 0, y: 0, width: 0, height: 0 });
  const [pages, setPages] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const recalcPages = () => {
    if (!scrollRef.current) return;
    const height = scrollRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;
    const newPages = Math.max(1, height / viewportHeight);
    setPages(newPages);
  };

  useLayoutEffect(() => {
    let canceled = false;
    const check = () => {
      if (canceled) return;
      if (scrollRef.current && scrollRef.current.scrollHeight > 0) {
        recalcPages();
      } else {
        requestAnimationFrame(check);
      }
    };
    check();

    window.addEventListener("resize", recalcPages);
    return () => {
      canceled = true;
      window.removeEventListener("resize", recalcPages);
    };
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    const observer = new MutationObserver(() => recalcPages());
    observer.observe(scrollRef.current, { childList: true, subtree: true });

    const resizeObs = new ResizeObserver(() => recalcPages());
    resizeObs.observe(scrollRef.current);

    return () => {
      observer.disconnect();
      resizeObs.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={["#0a0a0a"]} />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />

        <ScrollControls pages={pages!} damping={0.2}>
          <AnimatedMesh cubeScreenPos={cubeScreenPos} />
          <Scroll html>
            <div ref={scrollRef}>
              <ScrollContent cubeScreenPos={cubeScreenPos} />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
