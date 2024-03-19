import { useEffect } from 'react'
import { useLinkNameHook } from '../hooks/useLinkNameHook'
import Layout from '../components/layout/Layout'

const Dashboard = () => {

    const setLinkDispatch = useLinkNameHook()

    useEffect(()=>{
      setLinkDispatch("Dashboard")
    },[])

  return (
    <Layout>
          <div>Dashboard</div>
    </Layout>
  )
}

export default Dashboard