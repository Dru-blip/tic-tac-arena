
export interface GameContextProps{
    playerId:number,
    board:IBoard|undefined,
    room:IRoom|undefined,
    player1:IPlayer|undefined,
    player2:IPlayer|undefined,

    setPlayer1:React.Dispatch<React.SetStateAction<IPlayer|undefined>>,
    setPlayer2:React.Dispatch<React.SetStateAction<IPlayer|undefined>>,
    setPlayerId:React.Dispatch<React.SetStateAction<number>>,
    setBoard:React.Dispatch<React.SetStateAction<IBoard|undefined>>,
    setRoom:React.Dispatch<React.SetStateAction<IRoom|undefined>>
}

export interface IPlayer{
    roomId:string,
    playerId:number,
    symbol:string,
    online:boolean,
    score:number
}


export interface IRoom{
    roomId:string
    startGame:boolean
}

export interface IBoard{
    roomId:string
    state:string[]
    turn:string
    winner:string
    draw:boolean
}

