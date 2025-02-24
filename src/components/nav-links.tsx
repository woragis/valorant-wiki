'use client'

import { usePathname } from 'next/navigation'
import styles from './nav-links.module.css'
import Link from 'next/link'

export interface NavLinksInterface {
  title: string
  path: string
}
interface NavLinksProps {
  links: NavLinksInterface[]
}
export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname()
  return (
    <ul className={styles.links}>
      {links.map(({ title, path }, index) => {
        return (
          <li
            key={index}
            className={`${styles.link} ${
              pathname == path ? styles.active : ''
            }`}
          >
            <Link href={path}>{title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
