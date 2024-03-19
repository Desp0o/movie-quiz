import AvatarComponent from "./AvatarComponent"
import SearchComp from "./SearchComp"
import "./topbar.css"

const TopBar = () => {
  return (
    <div className='top_bar'>
    <SearchComp />
    <AvatarComponent />
    </div>
  )
}

export default TopBar