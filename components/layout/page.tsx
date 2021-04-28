import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props): JSX.Element => (
  <div className="page">{children}</div>
)

export default Page
