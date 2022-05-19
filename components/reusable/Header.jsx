import ReusableModal from '../modal/ReusableModal'
import MobileNavBar from '../nav/MobileNavBar'
import Navbar from '../nav/NavBar'
import SubMenu from '../nav/SubMenu'

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
