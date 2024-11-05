'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinkData=[

]


export default function Header() {
 
  const pathname= usePathname();

  return (
    <div className="absolute w-full z-10 ">
    <div className="flex justify-between container mx-auto text-white p-8 items-center">
      <Link href='/' className="text-3xl font-bold ">Home</Link>
     
      <div className="text-xl space-x-4">
        <Link className={pathname === '/performance' ? 'text-purple-500' : ''} href='/performance'>Performance</Link>
        <Link className={pathname === '/reliability' ? 'text-purple-500' : ''}href='/reliability'>Reliability</Link>
        <Link className={pathname === '/scale' ? 'text-purple-500' : ''} href='/scale'>Scale</Link>
      </div>
    </div>
  </div>
  )
}
