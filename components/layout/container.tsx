import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props): JSX.Element => (
  <div className="container mx-auto px-5">{children}</div>
)

export default Container
