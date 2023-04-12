"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Image,
  Clone,
  Gltf,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Ground } from "./Ground";

import { Suspense } from "react";
// import {Envior}

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { getProject, val } from "@theatre/core";

import flyThroughState from "./state.json";

// import {
//   SheetProvider,
//   PerspectiveCamera,
//   useCurrentSheet,
// } from "@theatre/r3f";

// studio.extend(extension);
// studio.initialize();

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const BillBoardsData = [
  {
    id: 1,
    distance: 0,
  },
  {
    id: 2,
    distance: 2,
  },
  {
    id: 3,
    distance: 4,
  },
  {
    id: 4,
    distance: 6,
  },
  {
    id: 5,
    distance: 6,
  },
  {
    id: 6,
    distance: 6,
  },
  {
    id: 7,
    distance: 6,
  },
  {
    id: 8,
    distance: 6,
  },
  {
    id: 9,
    distance: 6,
  },
];

const Billboard = ({ id }) => {
  // console.log(bb.nodes);
  return (
    <>
      <group
        position={[id % 2 ? -8 : 8, 0, -id * 8]}
        rotation={[0, id % 2 ? 1 : -1, 0]}
        // id % 2 ? -1 : 1
      >
        <group
          position={[0.01, 1.7, 0]}
          scale={[2, 2.1, 2]}
          rotation={[0, 0, 0]}
        >
          <Image
            url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            transparent
            opacity={1}
            scale={1.8}
          />
        </group>

        <Gltf
          src="/models/billboard.gltf"
          receiveShadow
          castShadow
          rotation={[0, -Math.PI / 2, 0]}
          position={[0, 0, 0]}
          scale={0.5}
        />
      </group>
    </>
  );
};

const BillBOardGroup = () => {
  // const bb = useGLTF("/models/billboard.gltf");
  return (
    <>
      {BillBoardsData.map((item, index) => {
        return (
          <group key={index}>
            <Billboard id={item.id} />
          </group>
        );
      })}
    </>
  );
};
const Test = () => {
  // const sheet = getProject("Fly Through").sheet("Scene");
  const sheet = getProject("Fly Through", { state: flyThroughState }).sheet(
    "Scene"
  );
  return (
    <div
      style={{
        height: "100vh",
        maxWidth: "100vw",
        width: "100vw",
        backgroundColor: "red",
      }}
    >
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        {/* <color attach="background" color="red" /> */}

        <ScrollControls pages={5} damping={0.1}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  scroll.curve(1 / 3, 1 / 3);
  // our callback will run on every animation frame
  useFrame(() => {
    console.log(scroll, sheet, scroll.el.scrollTop);
    if (scroll.offset > 0.9) {
      // scroll.scroll.current = 0;
      scroll.el.scrollTop = 0;
    }
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  const bgColor = "#84a4f4";

  return (
    <>
      <Environment preset="city" />
      {/* <ambientLight /> */}
      {/* <OrbitControls /> */}
      <pointLight position={[10, 10, 10]} />
      {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}

      <Suspense>
        <BillBOardGroup />
      </Suspense>

      <Ground />

      {/* <Suspense>
        <Gltf
          src="/models/corridoor.gltf"
          receiveShadow
          castShadow
          rotation={[0, 0, 0]}
          position={[0, -1, 0]}
          scale={4}
        />
      </Suspense> */}

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  );
}

export default Test;
