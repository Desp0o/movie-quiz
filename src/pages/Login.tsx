import { useEffect } from "react"
import Layout from "../components/layout/Layout"
import { useLinkNameHook } from "../hooks/useLinkNameHook"

const Login = () => {

  const setLinkDispatch = useLinkNameHook()

  useEffect(()=>{
    setLinkDispatch("")
  },[])

  return (
    <Layout>
      <div>Login</div>
    </Layout>
  )
}

export default Login