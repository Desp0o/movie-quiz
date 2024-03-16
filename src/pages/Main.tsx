import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLinkName } from "../redux/LinkSlicer"

const Main = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setLinkName("Main"))
  },[])


  return (
    <div>Main</div>
  )
}

export default Main