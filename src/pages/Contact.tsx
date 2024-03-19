import { useEffect } from "react"
import { useLinkNameHook } from "../hooks/useLinkNameHook"

const Contact = () => {

  const setLinkDispatch = useLinkNameHook()

  useEffect(()=>{
    setLinkDispatch('contact')
  },[])

  return (
    <div>Contact</div>
  )
}

export default Contact