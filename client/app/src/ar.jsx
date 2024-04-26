import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  function Model(props) {
    const { scene } = useGLTF("/old_rusty_car.glb");
    return <primitive className="w-60" object={scene} scale={0.1} {...props} />
  }
  
  function Ar() {
    return (
       
    <Card className='w-[18rem]'>
        <CardHeader>
      <Canvas dpr={[1,2]} camera={{ fov: 55 }} >
        <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 2]} style={{"width":"20"}} >
          <Stage environment={"sunset"} >
            <Model scale={0.01} className="w-60"/>
          </Stage>
        </PresentationControls>
      </Canvas>
      </CardHeader>
      </Card>
    
    );
  }
export default Ar