import { useContext, useEffect } from 'react'
import './App.css'
import BackButton from './components/BackButton'
import { CreateRoomForm, JoinRoomForm, Room } from './components/multiplayer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { MultiplayerGameContext } from './context'
import { socket } from './socket'


function App() {
  const { room, setPlayerId } = useContext(MultiplayerGameContext)
  useEffect(() => {
    // if (!playerId) {
    // }
    socket.on("connect", () => {
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
      <div className='bg-card min-h-screen flex flex-col items-center justify-center'>
        <BackButton path="/play" position={{top:"top-24",left:"left-2"}}/>
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
