// import { Delete } from 'lucide-react';
import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    // console.log(purchasedPlayers)
    return (
        <div>
            {/* Selected */}
            <div className='pb-5 md:pb-30'>
                <div>
                    {/* left */}
                    {
                       purchasedPlayers.map(player=><SelectedCard key={player.id} removePlayer={removePlayer} player={player}></SelectedCard>)
                    }
                </div>
                <a href="/"><button className=' btn btn-outline bg-white text-black hover:bg-yellow-300'>Add More Player</button></a>
                
            </div>
        </div>
    );
};

export default SelectedPlayers;