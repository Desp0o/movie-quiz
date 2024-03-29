import { useEffect } from 'react'
import { useLinkNameHook } from '../hooks/useLinkNameHook'
import Layout from '../components/layout/Layout'
import DashboardTop from '../components/dashboardComponents/TopSide/DashboardTop'

const Dashboard = () => {

    const setLinkDispatch = useLinkNameHook()

    useEffect(()=>{
      setLinkDispatch("Dashboard")
    },[])

  return (
    <Layout>
      <div className='dashboard'>
        <div className='dashboard_top'>
          <DashboardTop />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard