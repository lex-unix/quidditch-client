import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CrossIcon, HamburgerIcon } from './icons'

const links = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/teams',
    name: 'Teams'
  },
  {
    href: '/standings',
    name: 'Standings'
  }
]

interface NavLinkProps {
  name: string
  href: string
  path: string
}

const NavLink = (props: NavLinkProps) => {
  const { href, path, name } = props
  const active = href === path

  return (
    <Link
      href={href}
      className={`${
        active ? 'text-slate-900' : 'text-gray-400'
      } transition-colors hover:text-slate-900`}
    >
      {name}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="fixed h-12 w-full bg-neutral-50">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-2 md:px-0">
        <div className="mr-8">
          <h2 className="text-xl tracking-tighter md:text-2xl">Quidditch</h2>
        </div>
        <div className="hidden items-center gap-4 md:flex md:flex-1">
          {links.map(link => (
            <NavLink key={link.href} {...link} path={router.asPath} />
          ))}
        </div>
        <div className="inline-block md:hidden">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 p-1 ring-2 ring-gray-300"
          >
            {open ? <CrossIcon /> : <HamburgerIcon />}
          </button>
          {open && (
            <div className="fixed inset-0 top-12 bg-gray-50">
              <ul className="mt-4 px-2">
                {links.map(link => (
                  <li
                    key={link.href}
                    className="mb-4 border-b border-b-zinc-200 pb-2 last:border-b-0 "
                  >
                    <Link onClick={() => setOpen(false)} href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}