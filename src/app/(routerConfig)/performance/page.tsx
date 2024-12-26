import React from 'react';
import performanceSrc from '../../../../public/performance.jpg'
import Hero from '../../components/hero';
import { Metadata } from 'next';
export const metaData: Metadata = {
  title: 'performance'
}
export default function Page () {
  return (
      <Hero imgUrl={performanceSrc} altText='performanceSrc' content='welcome to performance'></Hero>
  )
}