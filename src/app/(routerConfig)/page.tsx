import React from 'react';
import homeSrc from '../../../public/home.jpg'
import Hero from '@/app/components/hero'
import { Metadata } from 'next';
import Head from 'next/head';
export const metaData: Metadata & Props = {
  title: 'Home'
}
type Props = {
  title: string
}
export default function Page () {
  return (
    <>
    <Head>
      <title>{metaData.title}</title>
    </Head>
        <Hero imgUrl={homeSrc} altText='Home' content='welcome to Home'></Hero>
    </>
  )
}