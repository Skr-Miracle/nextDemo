import React ,{ReactNode} from 'react';
import homeSrc from '../../../public/home.jpg'
import Hero from '@/app/components/hero'
import { Metadata } from 'next';
import Head from 'next/head';
export const metadata: Metadata = {
  title: 'Home'
}

export default function Page () {
  return (
    <>
    <Head>
      <title>{metadata.title as ReactNode}</title>
    </Head>
        <Hero imgUrl={homeSrc} altText='Home' content='welcome to Home'></Hero>
    </>
  )
}