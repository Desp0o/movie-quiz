import { useEffect } from "react"
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