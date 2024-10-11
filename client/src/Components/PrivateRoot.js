import { Navigate } from "react-router-dom"

export const PrivateRoot = ({children}) => {
    const token = localStorage.getItem('token')
  return (
    <div>
        {
            token ? children : <Navigate to={'/'}/>
        }
    </div>
  )
}
