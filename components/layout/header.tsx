import siteConfig from '../../lib/siteConfig'
import Nav from './nav'

const navMenuItems = siteConfig.navMenu

const Header = (): JSX.Element => {
  return (
    <div className="page-header h-12 md:h-16 fixed w-full z-0 top-0 bg-white">
      <Nav menu={navMenuItems} />
    </div>
  )
}

export default Header
