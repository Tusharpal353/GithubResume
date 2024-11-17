import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>

        <div className='flex justify-start py-4 border border-black cursor-pointer' onClick={()=>{navigate("/")}} >
          
            gitHub resume builder
        </div>
    </div>
  )
}

export default Header