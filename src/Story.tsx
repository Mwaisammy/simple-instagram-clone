type Props = {
    user: {
        id: string;
        email: string;
        profilePicture: string;
        username: string;
    }
}

function Story( { user :{id, email, profilePicture, username}} : Props) {
    console.log(profilePicture)
  return (
    <div> 
 <img src={profilePicture} alt="" className="w-14 h-14 rounded-full object-cover p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 duration-200 transition-all ease-out" />
    <p className="text-xs w-14 truncate text-center">{username}</p>
        
    </div>
  )
}

export default Story