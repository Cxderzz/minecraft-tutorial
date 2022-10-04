import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
    return (
        <>
            <div>Outside Canvas</div>
            <Canvas>
                <Sky></Sky>
            </Canvas>
        </>
    );
}

export default App;
