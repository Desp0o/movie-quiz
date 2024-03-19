import { useEffect } from 'react'
import { useLinkNameHook } from '../hooks/useLinkNameHook'

const Dashboard = () => {

    const setLinkDispatch = useLinkNameHook()

    useEffect(()=>{
      setLinkDispatch("Dashboard")
    },[])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard