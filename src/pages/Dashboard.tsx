import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLinkName } from '../redux/LinkSlicer'

const Dashboard = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setLinkName("Dashboard"))
    },[])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard