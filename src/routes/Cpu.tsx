// component for cpu game
import BackButton from "../components/BackButton";
import SinglePlayerGame from "../components/single-player/Game";
import SinglePlayerGameProvider from "../components/single-player/SinglePlayerGameProvider";


export default function Cpu() {
    return (
        <div className="bg-card min-h-screen flex flex-col items-center justify-center text-white">
            <BackButton path="/play" position={{top:"top-20",left:"left-20"}}/>
            <SinglePlayerGameProvider>
                <SinglePlayerGame />
            </SinglePlayerGameProvider>
        </div>
    )
}