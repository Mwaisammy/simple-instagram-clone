import { Heart, Search } from "lucide-react";
import { useState } from "react";
function div() {

    const[ input, setInput] = useState('')

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            const inputToSend = input;
            console.log(inputToSend);
            setInput('');
    }
  return (
    <header className=" w-full border-b border-gray-700 ">
    <div className=' flex items-center justify-between mx-5'>
        {/* image */}
    <img src="/src/assets/instagram-logo (1).png" alt=""  className='w-48 h-32 object-contain '/>
   

    <div className='flex items-center space-x-5' >
       <form onSubmit={ e=> handleSubmit} className="flex items-center space-x-4 bg-[#262626] p-[7px] rounded-md">
        <button type="submit">
            <Search className="h-5 w-5 text-gray-500"/>
           
        </button> 
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" className="focus:outline-none bg-transparent"/>
       </form>
       <div>
        <Heart className="h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
       </div>
         {/* search */}
    {/* icon */}
        
    </div>
    </div>
    
    </header>
  )
}
 
export default div;