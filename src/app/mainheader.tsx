import Link from 'next/link'
import React from 'react'

export default function MainHeader() {
  return (
    <div className='bg-amber-900 text-white'>
      <h1>main header</h1>
      <div className="nav flex gap-5 text-center justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/nextDocs"}>Docs</Link>
      </div>
    </div>
  )
}
