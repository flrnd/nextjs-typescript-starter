import siteConfig from '../../lib/siteConfig'
import FooterMenu from './footer-menu'

const footerMenuItems = siteConfig.footerMenu
const footerCopyright = siteConfig.footerCopyright

const Footer = (): JSX.Element => {
  return (
    <footer className="page-footer justify-center items-center text-center p-5">
      <FooterMenu menu={footerMenuItems} />

      <div className="text-center text-sm italic">{footerCopyright}</div>
    </footer>
  )
}

export default Footer
