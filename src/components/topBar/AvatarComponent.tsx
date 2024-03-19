import { avatarSVG } from '../../assets/SVGS'
import { useUserHook } from '../../hooks/useUserHook'
const AvatarComponent = () => {
  const {userName} = useUserHook()

  return (
    <div className='avatar_component'>
      {userName ? <p>username</p> : <></>}
      {userName ? <img src='' className='user_avatar' alt='user avatar' /> : avatarSVG}
    </div>
  )
}

export default AvatarComponent