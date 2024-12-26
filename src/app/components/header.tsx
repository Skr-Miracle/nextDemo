'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const linkData = [
  {name: 'Performance' , href: '/performance'},
  {name: 'Reliability' , href: '/reliability'},
  {name: 'Scale' , href: '/scale'},
]


export default function Header () {
  const pathName = usePathname ()
  return  (
    <div className='absolute w-full z-10'>
      <div className=" flex justify-between  container max-auto text-white p-8 items-center">
        <Link className='text-3xl font-bold' href="/">Home</Link>
        <div className='text-xl space-x-4 '>
          {linkData.map((item,index) => <Link href={item.href} key={index} className={pathName===item.href? 'text-purple-500' : ''}>{item.name}</Link>)}
        </div>
      </div>
    </div>
  )
}





