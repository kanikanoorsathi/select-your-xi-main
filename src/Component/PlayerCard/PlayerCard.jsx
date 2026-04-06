import React, { useState } from "react";
import { Annoyed, Flag } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';


const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelected = (playerData) =>{
      if(availableBalance <playerData.price){
        toast.success("Not enough coins!");
        return;
      }
      if(purchasedPlayers.length === 6){
        toast.success("6 players already selected!");
        return;
      }
      setIsSelected(true) 
      setAvailableBalance(availableBalance- playerData.price 
      );
      setPurchasedPlayers([...purchasedPlayers,playerData]);
    };
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-lg mb-6">
          <figure>
            <img
              className="h-[20vh] object-cover object-top rounded-box"
              src={player.Image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Annoyed /> {player.Name}
            </h2>
            <div>
              <div className="flex justify-between items-center gap-2">
                <Flag size={15} />
                <p className="font-normal text-sm">{player.country}</p>
                <span className="btn text-gray-500 text-sm">
                  {player.Playing}
                </span>
              </div>
            </div>
            <h2 className=" font-semibold text-xl ">{player.rating}</h2>
            <div className="flex justify-between items-center gap-2">
              <p className="font-normal text-sm">{player.batting}</p>
              <span className=" ">{player.bowling}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="font-normal text-sm">Price : $ {player.price}</p>
              <button className="btn" disabled={isSelected} onClick={()=> handleSelected (player)
                
              }>
                {isSelected ===true? "Selected" : "Choose Player"}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
