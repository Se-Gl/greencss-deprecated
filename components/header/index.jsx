import ReusableModal from '../modal/ReusableModal'
import MobileNavBar from './MobileNavBar'
import Navbar from './NavBar'
import SubMenu from './SubMenu'

export default function Header() {
  return (
    <div className='container'>
      <Navbar />
      <SubMenu />
      <ReusableModal LinkClass={'isHome'} />
      {/* Mobile Menu */}
      <MobileNavBar />
    </div>
  )
}
