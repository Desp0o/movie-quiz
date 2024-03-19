import React from 'react'
import "./dashboiard.css"
import { avatarDashboard } from '../../assets/SVGS'
import { useUserHook } from '../../hooks/useUserHook'
import ProgressBar from './ProgressBar'

const DashboardTop = () => {
    const {userName} = useUserHook()
  return (
    <div className='dash_top_comp'>
        <div className='dashboard_avatar'>
            {!userName ? <img src='' className='user_dash_avatar' alt='user avatar' /> : avatarDashboard}
        </div>
        <div className='dash_top_right'>
            <p className='dash_top_username'>{userName}</p>
            <div className='dash_top_progress'>
                <ProgressBar />
            </div>
            <div className='dash_top_stat_blocks'></div>
        </div>
    </div>
  )
}

export default DashboardTop