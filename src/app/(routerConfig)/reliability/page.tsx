import React from 'react';
import reliabilitySrc from '../../../../public/reliablity.jpg'
import Hero from '../../components/hero';
import { Metadata } from 'next';
export const metaData: Metadata = {
  title: 'Reliability'
}
export default function Page () {
  return (
      <Hero imgUrl={reliabilitySrc} altText='reliabilitySrc' content='welcome to reliability'></Hero>
  )
}