
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Component/AvailablePlayers/AvailablePlayers'
import Navbar from './Component/Header/Navbar'
import Banner from './Component/Hero/banner'
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const [toggle, setToggle] =useState(true);
  const playersPromiser = fetchPlayers();


  return (
    <main className='px-20 space-y-10 mb-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='flex justify-between items-center p-2'>
        <h1 className='font-bold text-2xl'>Available players</h1>
        <div className='text-gray-600 font-black'>
          <button onClick={()=>setToggle(true)} className={`py-4 px-2 border-r-0 border border-gray-400 rounded-l-2xl ${toggle === true? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-4 px-2 border-l-0 border border-gray-400 rounded-r-2xl ${toggle === false? "bg-[#E7FE29]" : ""}`}>Selected <span>(0)</span></button>

        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <AvailablePlayers playersPromiser={playersPromiser}></AvailablePlayers>
      </Suspense> :  <SelectedPlayers></SelectedPlayers>
      }
      
     
    </main>
  )
}

export default App
