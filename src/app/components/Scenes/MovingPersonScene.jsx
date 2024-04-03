
// import useSpline from '@splinetool/r3f-spline'
// import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'

// export default function MovingPersonScene({ ...props }) {
//   const { nodes, materials } = useSpline('https://prod.spline.design/6ndYPvxURaoK2BV8/scene.splinecode')
//   return (
//     <>
//       <color attach="background" args={['#000000']} />
//       <group {...props} dispose={null}>
//         <scene name="Scene">
//           <group name="Turn Table" position={[1.54, 66.77, -250.78]} rotation={[-Math.PI, 0, -Math.PI]}>
//             <group name="Animation" position={[0, 65.77, 0]}>
//               <PerspectiveCamera
//                 name="Camera"
//                 makeDefault={true}
//                 zoom={0.5}
//                 far={100000}
//                 near={70}
//                 fov={45}
//                 position={[0, 131.54, 575.72]}
//                 rotation={[0, 0, 0]}
//               />
//             </group>
//           </group>
//           <group name="Body 2" position={[-109.07, -373.67, -126.38]} rotation={[0, 0, 0]} scale={9.39}>
//             <mesh
//               name="Body"
//               geometry={nodes.Body.geometry}
//               material={nodes.Body.material}
//               position={[11.35, -122.84, -24.27]}
//               scale={1.22}
//             />
//           </group>
//           <mesh
//             name="Grid"
//             geometry={nodes.Grid.geometry}
//             material={materials['Grid Material']}
//             castShadow
//             receiveShadow
//             position={[-303.32, -393.34, -72.04]}
//             rotation={[0, 0, 0]}
//             scale={2.35}
//           />
//           <group name="Body1" position={[-109.07, -373.67, -126.38]} rotation={[0, 0, 0]} scale={9.39}>
//             <mesh
//               name="Body2"
//               geometry={nodes.Body2.geometry}
//               material={nodes.Body2.material}
//               position={[11.35, -122.84, -24.27]}
//               scale={1.22}
//             />
//           </group>
//           <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
//           <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
//         </scene>
//       </group>
//     </>
//   )
// }
