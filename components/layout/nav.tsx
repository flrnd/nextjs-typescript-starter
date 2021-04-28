import { useState } from 'react'
import { Menu } from '../../lib/interfaces'
import NavMenu from './nav-menu'

interface Props {
  menu: Menu[]
}

const Nav = ({ menu }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full z-1 bg-white">
      <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-3">
        <div className="flex items-center">
          <span className="text-4xl font-bold">logo</span>
        </div>

        <div className="block md:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 primary_color"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <div className="pl-1 font-semibold">Menu</div>
          </button>
        </div>

        <div
          className={`w-full flex-grow md:flex ${
            isOpen ? 'block shadow-md' : 'hidden'
          } lg:items-center md:w-auto mt-2 md:mt-0 bg-transparent text-black rounded p-4 md:p-0`}
          id="nav-content"
        >
          <NavMenu menu={menu} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
