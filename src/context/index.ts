import { createContext } from "react"
import { MultiplayerGameContextProps,SinglePlayerGameContextProps} from "../types"


const SinglePlayerContext=createContext<SinglePlayerGameContextProps>({} as SinglePlayerGameContextProps)
const MultiplayerGameContext=createContext<MultiplayerGameContextProps>({} as MultiplayerGameContextProps)

export {MultiplayerGameContext,SinglePlayerContext}