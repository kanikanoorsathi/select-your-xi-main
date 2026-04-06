import { Delete } from 'lucide-react';
import React from 'react';


const SelectedCard = ({player, removePlayer}) => {
    // console.log(player);
    const handleRemove = () => {
        removePlayer(player.id)
    }
    return (
        <div className='flex justify-between items-center border border-gray-400 py-4 px-3 rounded-box my-4 shadow-lg'>
            {/* <h1>Selected Card</h1> */}
            <div className='flex items-center gap-4 '>
                <img className='w-20 rounded-box' src={player.Image} alt="" />
                <div className=''>
                   <h1 className='font-bold text-md md:text-xl mb-2'>{player.Name}</h1>
                   <p className='font-normal text-xs'>{player.Playing}</p>
                </div>
            </div>
            <div>
                    {/* right */}
                    
                        <button className='btn btn-outline btn-sm' onClick={handleRemove}> 
                            <Delete />
                        </button>
                  
                    
            </div>
        </div>
    );
};

export default SelectedCard;