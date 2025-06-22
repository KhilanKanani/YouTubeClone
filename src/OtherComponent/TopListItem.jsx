import { useState } from 'react'
import { UseAuth } from '../ContextApi/AuthProvider'

const TopListItem = () => {

    const category = [
        "All", "Music", "React Router", "Bollywood Songs" , "Computer Programming", "Movie", "News", "Mixes", "1990s", "Live", "Vollyball", "Cricket", "Football", "T-Series", "C++", "Arijit Singh", " Action Thrillers", "Albums", "Indian pop music", "Hindi Music", "Presentations", "Recently uploaded", "Watched", "New to you"
    ]

    const { setvalue } = UseAuth();
    const [selected, setselected] = useState("");

    return (
        <div className='flex ml-2 mr-2 gap-2 py-2 overflow-auto'>
            {
                category.map(item => (
                    <button
                        key={item}
                        onClick={() => { setselected(item), setvalue(item) }}
                        className={`font-semibold text-sm flex-none borcer-b-1 border-gray-600 px-3 py-1 cursor-pointer rounded-lg ${selected == item ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-400"}`}>{item}
                    </button>
                ))
            }
        </div>
    )
}

export default TopListItem
