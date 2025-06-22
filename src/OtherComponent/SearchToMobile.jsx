import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { UseAuth } from "../ContextApi/AuthProvider";


const SearchToMobile = () => {

    const navigate = useNavigate();
    const { setvalue } = UseAuth();

    const [input, setinput] = useState("");
    const [mapInput, setmapInput] = useState([]);
    const [select, setselect] = useState();

    function handleSearch() {
        if (!input.trim()) {
            return
        };

        setvalue(input);
        setmapInput(prev => [input, ...prev]);
        navigate("/");
        setinput("");
    }

    return (
        <div>
            <div className='flex justify-center p-2 items-center gap-1 h-15 fixed left-0 right-0 top-0 bg-white'>
                <img src="backArrow.png" className='h-7 w-6 mb-1 cursor-pointer' onClick={() => navigate("/")} />
                <input type="text" className='bg-gray-50 border-1 outline-0 border-gray-200 rounded-full w-full pl-3 p-2' value={input} onChange={(e) => setinput(e.target.value)} placeholder="Search Kk's Youtube..." onKeyDown={(e) => e.key == 'Enter' && handleSearch()} />
                {
                    input
                        ? <img src="CrossLogo.jpg" className='h-8 w-8 mr-2 cursor-pointer absolute right-2 rounded-full bg-gray-100' onClick={() => setinput("")} />
                        : <img src="MicroPhone.png" className='h-10 w-10 bg-gray-100 rounded-full cursor-pointer  hover:bg-gray-300' />
                }
            </div>

            <div className="mt-15 px-2 m-1 overflow-y-auto w-full">
                {
                    mapInput.length > 0 &&
                    mapInput?.map((item, index) => (
                        <ul key={index}>
                            <li className="cursor-pointer font-semibold" onClick={() => (setselect(item), setinput(select))}>{item}</li>
                            <hr className="border-gray-200 mt-1 outline-0" />
                        </ul>
                    ))
                }
            </div>

        </div>
    )
}

export default SearchToMobile
