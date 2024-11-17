import { Github } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
        
        <div className='flex justify-start py-4 shadow-lg cursor-pointer pl-20 font-bold text-xl ' onClick={()=>{navigate("/")}} >
        <div>
          <Github/>
        </div>
            GitHub resume builder
        </div>
    </div>
  )
}

export default Header