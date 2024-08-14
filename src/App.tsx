import { useContext, useEffect } from 'react'
import './App.css'
import { CreateRoomForm, JoinRoomForm, Room } from './components/multiplayer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import {MultiplayerGameContext} from './context'
import { socket } from './socket'


function App() {
  const { playerId, room, setPlayerId } = useContext(MultiplayerGameContext)
  useEffect(() => {
    // if (!playerId) {
    // }
    socket.on("connect", ()=>{
      setPlayerId(socket.id!)      
    })
    // socket.on("disconnect", () => {

    // })
    // return () => {
    //   socket.off("connect", socketEvents.onConnect)
    //   socket.off("disconnect", () => { socketEvents.onDisconnect(room!, playerId) })
    // }
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
