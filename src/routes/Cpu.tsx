
// component for cpu game
import Board from "../components/single-player/Board";
import SinglePlayerGameProvider from "../components/single-player/SinglePlayerGameProvider";


export default function Cpu() {
    return (
        <div className="bg-card min-h-screen text-white ">
            <SinglePlayerGameProvider>
                <Board />
            </SinglePlayerGameProvider>
        </div>
    )
}