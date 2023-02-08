import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CrossIcon, HamburgerIcon } from './icons'

const links = [
  {
    href: '/news',
    name: 'News'
  },
  {
    href: '/teams',
    name: 'Teams'
  },
  {
    href: '/players',
    name: 'Players'
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
    <div className="fixed z-40 h-16 w-full border-b border-b-gray-300/70 bg-neutral-50">
      <div className="mx-auto flex h-full items-center justify-between px-4 lg:px-24">
        <div className="mr-8">
          <h2 className="font-cinzel text-xl font-bold tracking-tighter md:text-2xl">
            <Link onClick={() => setOpen(false)} href="/">
              {' '}
              Quidditch
            </Link>
          </h2>
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
            <div className="fixed inset-0 top-16 bg-gray-50">
              <ul className="mt-4 px-4">
                {links.map(link => (
                  <li
                    key={link.href}
                    className="mb-4 border-b border-b-zinc-200 pb-2 text-sm last:border-b-0"
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
