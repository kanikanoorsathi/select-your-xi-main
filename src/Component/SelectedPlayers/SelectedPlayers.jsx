// import { Delete } from 'lucide-react';
import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    // console.log(purchasedPlayers)
    return (
        <div>
            {/* Selected */}
            <div className=''>
                <div>
                    {/* left */}
                    {
                       purchasedPlayers.map(player=><SelectedCard key={player.id} removePlayer={removePlayer} player={player}></SelectedCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default SelectedPlayers;