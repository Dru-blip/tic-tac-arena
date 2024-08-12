import { useContext, useEffect } from 'react'
import './App.css'
import CreateRoomForm from './components/create-room-form'
import Room from './components/room'
import GameContext from './context'
import * as socketEvents from "./lib/events"
import { socket } from './socket'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import JoinRoomForm from './components/join-room-form'


function App() {
  const { playerId, room, setPlayerId } = useContext(GameContext)
  useEffect(() => {
    if (playerId === -2550) {
      let id = Math.floor(Math.random() * 1000)
      setPlayerId(id)
      sessionStorage.setItem("playerId", String(playerId))
    }
    socket.on("connect", socketEvents.onConnect)
    socket.on("disconnect", () => {
      console.log("Disconnecting")
      socket.emit("player:disconnect", { roomId: room?.roomId, playerId })
    })
    return () => {
      socket.off("connect", socketEvents.onConnect)
      socket.off("disconnect", () => { socketEvents.onDisconnect(room!, playerId) })
    }
  }, [])
  return (
    <>
      <div className='bg-card min-h-screen flex items-center justify-center'>
        {
          room ? <Room /> : (
            <Tabs defaultValue="create" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="create">Create Room</TabsTrigger>
                <TabsTrigger value="join">Join Room</TabsTrigger>
              </TabsList>
              <TabsContent value="create">
                <CreateRoomForm />
              </TabsContent>
              <TabsContent value="join">
                <JoinRoomForm />
              </TabsContent>
            </Tabs>
          )
        }
      </div>
    </>
  )
}

export default App
