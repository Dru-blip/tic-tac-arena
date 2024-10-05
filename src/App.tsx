import { ArrowLeftIcon } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { CreateRoomForm, JoinRoomForm, Room } from './components/multiplayer'
import { Button } from './components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { MultiplayerGameContext } from './context'
import { socket } from './socket'


function App() {
  const { room, setPlayerId } = useContext(MultiplayerGameContext)
  const navigate=useNavigate()

  useEffect(() => {

    socket.on("connect", () => {
      setPlayerId(socket.id!)
    })

  }, [])
  return (
    <>
      <div className='bg-card min-h-screen flex flex-col items-center justify-center text-white'>
        {/* <BackButton path="/play" position={{top:"top-24",left:"left-2"}}/> */}
        <Button className='absolute top-24 left-2' variant={"outline"} onClick={()=>{
          socket.emit("playerLeaving")
          navigate("/play")
        }}>
          <ArrowLeftIcon className='mr-2 w-4 h-4'/> Back
        </Button>
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
