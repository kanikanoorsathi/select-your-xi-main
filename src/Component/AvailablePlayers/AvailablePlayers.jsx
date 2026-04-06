import React, { use } from "react";
import { Annoyed, Flag } from "lucide-react";

const AvailablePlayers = ({ playersPromiser }) => {
  const playerData = use(playersPromiser);
    console.log(playerData);
//   const { player_name } = playerData;
  return (
    <div>
      {/* Available */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {playerData.map((player) => (
          <div>
            <div className="card bg-base-100 shadow-lg mb-6">
              <figure>
                <img className="h-[20vh] object-cover object-top rounded-box"
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
                        <span className="btn text-gray-500 text-sm">{player.Playing}</span>
                    </div>
                </div>
                <h2 className=" font-semibold text-xl ">{player.rating}</h2>
                <div className="flex justify-between items-center gap-2">
                    
                    <p className="font-normal text-sm">{player.batting}</p>
                    <span className=" ">{player.bowling}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                   
                    <p className="font-normal text-sm">Price {player.price}</p>
                    <a className="btn" href="">Choose Player</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
