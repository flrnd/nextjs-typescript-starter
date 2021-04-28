import Link from 'next/link'
import { Menu } from '../../lib/interfaces'

interface Props {
  menu: Menu[]
}

export default function NavMenu({ menu }: Props): JSX.Element {
  return (
    <ul className="list-reset md:flex justify-end flex-1 text-xl items-center">
      {menu.map((item) => (
        <li
          className="flex justify-end mr-0 py-2 md:mr-1 md:px-2 "
          key={item.name}
        >
          <Link href={`/${item.link}`}>
            <a className="links primary_color  md:shadow-none md:p-0">
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
