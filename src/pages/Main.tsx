import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLinkNameHook } from "../hooks/useLinkNameHook"


const Main = () => {
  const setLinkDispatch = useLinkNameHook()

  useEffect(()=>{
    setLinkDispatch('Main')
  },[])


  return (
    <div>Main</div>
  )
}

export default Main