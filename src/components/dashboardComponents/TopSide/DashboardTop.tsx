import "../dashboiard.css"
import { avatarDashboard } from "../../../assets/SVGS"
import { useUserHook } from '../../../hooks/useUserHook'
import ProgressBar from './ProgressBar'
import DashStats from "./DashStats"

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
                <ProgressBar trackWidth={600} barWidth={433}/>
            </div>
            <div className='dash_top_stat_blocks'>
                <DashStats />
            </div>
        </div>
    </div>
  )
}

export default DashboardTop