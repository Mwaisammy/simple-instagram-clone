import Story from "./Story";
import { createRandomUser, allUsers } from "./fakerUsers";
function Stories() {

 
  return (
    <div className="flex space-x-2 p-6 mt-8  rounded-sm overflow-x-scroll scrollbar-thumb-gray-600">   
        
        {allUsers?.map((user) =>(
        <Story key={user.id} user = { user }/>
         ))}
      </div>
  )
}

export default Stories