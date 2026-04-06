import React, { use } from "react";
// import { Annoyed, Flag } from "lucide-react";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Key } from "lucide-react";

const AvailablePlayers = ({ playersPromiser, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const playerData = use(playersPromiser);
    // console.log(playerData);
//   const { player_name } = playerData;
  return (
    <div>
      {/* Available */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {playerData.map((player) => (<PlayerCard key={player.id} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
          
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
