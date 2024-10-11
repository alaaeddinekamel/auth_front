import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"

const Profil = () => {
    const user = useSelector(state => state.AuthReducer.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
  return (
    <div>{user.name}
    <br/>
           {user.email}

     </div>
    
  )
}

export default Profil