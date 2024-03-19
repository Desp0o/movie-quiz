import { useEffect } from "react"
import { useLinkNameHook } from "../hooks/useLinkNameHook"
import Layout from "../components/layout/Layout"


const Main = () => {
  const setLinkDispatch = useLinkNameHook()

  useEffect(()=>{
    setLinkDispatch('Main')
  },[])


  return (
    <Layout>
      <div></div>
    </Layout>
  )
}

export default Main