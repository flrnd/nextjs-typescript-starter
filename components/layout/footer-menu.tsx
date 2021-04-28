import Link from 'next/link'
import { Menu } from '../../lib/interfaces'

interface Props {
  menu: Menu[]
}

export default function FooterMenu({ menu }: Props): JSX.Element {
  return (
    <ul className="list-reset flex justify-center flex-1 items-center">
      {menu.map((item) => (
        <li className="flex justify-center py-2 px-1 " key={item.name}>
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
