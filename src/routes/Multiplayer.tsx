import App from "../App";
import { GameProvider } from "../components/multiplayer";



export default function Multiplayer() {
    return (
        <>
            <GameProvider>
                <App />
            </GameProvider>
        </>

    )
}