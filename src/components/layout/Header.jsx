import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <header id='header' className='container'>
      <div className='header__inner'>
        <h1 className='logo'>
          <Link href='/'>8Worl:D</Link>
        </h1>
        <Nav />
      </div>
    </header>
  )
}
