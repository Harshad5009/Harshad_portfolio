import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial, Edges, Html } from '@react-three/drei'

const Hologram = ({ position, title, subtitle, color = "#22d3ee" }) => {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color={color} transparent opacity={0.1} metalness={1} roughness={0} />
      <Edges color={color} threshold={15} />
      <Html transform position={[0, 0, 0.06]} distanceFactor={3} occlude>
         <div className="w-48 p-4 glass-card border-primary/20 bg-primary/5 text-center pointer-events-none select-none">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{title}</h3>
            <p className="text-[8px] text-white/40 uppercase">{subtitle}</p>
         </div>
      </Html>
    </mesh>
  )
}

const TechCore = () => {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial color="#22d3ee" speed={2} distort={0.4} wireframe />
    </mesh>
  )
}

export const Hero3D = () => {
  console.log("Hero3D Rendering with simplified primitives...")
  return (
    <div className="absolute inset-0 -z-5 h-full w-full bg-slate-950">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.5} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#818cf8" />

          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <group position={[0, -0.5, 0]}>
            <TechCore />
            
            <Hologram 
              position={[-4, 2, 0]} 
              title="Nashik Kumbh" 
              subtitle="MERN Platform" 
              color="#22d3ee" 
            />
            <Hologram 
              position={[4, 1.5, -2]} 
              title="AetherOps" 
              subtitle="Autonomous Telemetry" 
              color="#818cf8" 
            />
            <Hologram 
              position={[-3, -2, -1]} 
              title="TopoAnalyzer" 
              subtitle="C++ Engine" 
              color="#f472b6" 
            />
          </group>

          <gridHelper args={[100, 50, "#22d3ee", "#1e293b"]} position={[0, -3, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
