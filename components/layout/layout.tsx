import { ReactNode } from 'react'
import Page from './page'
import Meta from './meta'
import Header from './header'
import Footer from './footer'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <Page>
      <Meta />
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
    </Page>
  )
}

export default Layout
