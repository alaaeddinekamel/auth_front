import { useSelector } from "react-redux"

const Errors = () => {
    const mahmoudEgaleError = useSelector(state => state.ErreurReducer)
  return (
    <div>
        {
            mahmoudEgaleError.map((el,i,t)=>el.msg)
        }
    </div>
  )
}

export default Errors