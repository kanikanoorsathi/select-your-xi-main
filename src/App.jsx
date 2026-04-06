
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Component/AvailablePlayers/AvailablePlayers'
import Navbar from './Component/Header/Navbar'
import Banner from './Component/Hero/banner'
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers'
import { ToastContainer, toast } from 'react-toastify';

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromiser = fetchPlayers();
function App() {

  const [toggle, setToggle] =useState(true);
  const [availableBalance, setAvailableBalance] = useState(4900000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  const removePlayer = (id) =>{
    // console.log(id);
    const playerToRemover = purchasedPlayers.find(player => player.id === id);
    if(!playerToRemover) return;
    setPurchasedPlayers(prev => prev.filter(player => player.id !== id));
    setAvailableBalance(prev => prev + playerToRemover.price)
    toast.success("You deleted your Player!");
    return;

  };
  


  return (
    <main className='px-2 md:px-20 space-y-10 mb-10'>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className='flex flex-1 md:flex-2 flex-wrap gap-4 justify-center md:justify-between items-center p-2'>
        <div>
          <h1 className='font-bold text-2xl'>{
              toggle === true? "Available players" : `Selected Players(${purchasedPlayers.length}/6)`
            }
          </h1>
        </div>
        <div className='text-gray-600 font-black '>
          <button onClick={()=>setToggle(true)} className={`py-4 px-2 md:border-r-0 border border-gray-400 md:rounded-l-2xl mb-4 md:mb-0 ${toggle === true? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-4 px-2 md:border-l-0 border border-gray-400 md:rounded-r-2xl ${toggle === false? "bg-[#E7FE29]" : ""}`}>Selected <span>({purchasedPlayers.length})</span></button>

        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromiser={playersPromiser}></AvailablePlayers>
      </Suspense> :  <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }
       <ToastContainer />
      
     
    </main>
  )
}

export default App
