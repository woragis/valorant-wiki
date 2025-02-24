import Link from 'next/link'
import styles from './navbar.module.css'
import NavLinks, { NavLinksInterface } from './nav-links'

export default function Navbar() {
  const links: NavLinksInterface[] = [
    { title: 'home', path: '/' },
    { title: 'characters', path: '/characters' },
    { title: 'maps', path: '/maps' },
    { title: 'weapons', path: '/weapons' },
  ]

  return (
    <header className={styles.nav}>
      <NavLinks links={links} />
    </header>
  )
}
