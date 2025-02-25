import Link from 'next/link'

import styles from './navbar.module.css'
import NavLinks, { NavLinksInterface } from './nav-links'
// import logo from '@/assets/valorant-logo.svg'

export default function Navbar() {
  const links: NavLinksInterface[] = [
    { title: 'home', path: '/' },
    { title: 'characters', path: '/characters' },
    { title: 'maps', path: '/maps' },
    { title: 'weapons', path: '/weapons' },
  ]

  return (
    <header className={styles.nav}>
      <nav className={styles.nav}>
        <Link href='/'>Valorant logo</Link>
        <NavLinks links={links} />
      </nav>
    </header>
  )
}
