import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>

        <div className='flex justify-start py-4 border border-black cursor-pointer pl-20 font-bold text-xl ' onClick={()=>{navigate("/")}} >
          
            GitHub resume builder
        </div>
    </div>
  )
}

export default Header